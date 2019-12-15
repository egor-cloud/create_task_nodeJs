const data_order = require('./../../data/orders.json')
const data_handlers = require('./../../data/handlers.json')
const fs = require('fs')
const path = require('path')

class Task{

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

    static read_file_data_order(){
        return new Promise((resolve, reject) =>{
            fs.readFile(
                path.join(__dirname, '..', '..', 'data', 'orders.json'),
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
        const order = await Task.read_file_data_order()
        const handlers = await Task.read_file_data_handler()
        if(order.length){
            if(handlers.length < 3){
                const result = order.shift()
                handlers.push(result)
                handlers.forEach((element) => {
                    if(element.complexity == 1){
                        element.complexity = Date.now() + 30 * 1000
                    }else if(element.complexity == 2){
                        element.complexity = Date.now() + 20 * 1000
                    }else{
                        element.complexity = Date.now() + 10 * 1000
                    }
                })
                await Task.write_file_data_handler(handlers)
                await Task.write_file_data_order(order)
            }else{
                console.log('обработчики заняты')
            }
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

    static async write_file_data_order(order){
        return new Promise((resolve, reject) => {
            fs.writeFile(
            path.join(__dirname, '..', '..', 'data', 'orders.json'),
            JSON.stringify(order),
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





module.exports = Task