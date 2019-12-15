const data_handlers = require('./../../data/handlers.json')
const data_completeHandlers = require('./../../data/completeHandlers.json')
const fs = require('fs')
const path = require('path')

class CompleteTask{

    static read_file_data_handler(){
        return new Promise((resolve, reject) =>{
            fs.readFile(
                path.join(__dirname, '..', '..', 'data', 'handlers.json'),
                'utf-8',
                (err, content) => {
                    if (err){
                        reject(err)
                    }else{
                        resolve(JSON.parse(content))
                    }
                })          
        })
    }

    static read_file_data_completeHandlers(){
        return new Promise((resolve, reject) =>{
            fs.readFile(
                path.join(__dirname, '..', '..', 'data', 'completeHandlers.json'),
                'utf-8',
                (err, content) => {
                    if (err){
                        reject(err)
                    }else{
                        resolve(JSON.parse(content))
                    }
                })          
        })
    }

    static async result(){
        const handlers = await CompleteTask.read_file_data_handler()
        const completeHandlers = await CompleteTask.read_file_data_completeHandlers()

        if(handlers.length){
            const complete_handlers_not_null = completeHandlers.filter((el) => {
              return  el !== null
            })

            const complete_handler = handlers.find((complete) => {
                return Date.now() >= complete.complexity
        })
            complete_handlers_not_null.push(complete_handler)
        // console.log(completeHandlers)
        
            for (let index = 0; index < handlers.length; index++) {
                const element = handlers[index];
                if(Date.now() > element.complexity){
                    handlers.splice(index, 1)
            }     
        }
            CompleteTask.write_file_data_completeHandlers(complete_handlers_not_null)
            CompleteTask.write_file_data_handler(handlers)
        }
    }

    static write_file_data_handler(handlers){
        return new Promise((resolve, reject) => {
            fs.writeFile(
            path.join(__dirname, '..', '..', 'data', 'handlers.json'),
            JSON.stringify(handlers),
            (err) => {
                if(err){
                    reject(`${err} ошибкааааааааа`)
                }else{
                    resolve()
                }
            })
        })
    }

    static async write_file_data_completeHandlers(completeHandlers){
        return new Promise((resolve, reject) => {
            fs.writeFile(
            path.join(__dirname, '..', '..', 'data', 'completeHandlers.json'),
            JSON.stringify(completeHandlers),
            (err) => {
                if(err){
                    reject(`${err} ошибкааааааааа`)
                }else{
                    resolve()
                }
            })
        })
    }

}

module.exports = CompleteTask