const uuid = require('uuid')
const fs = require('fs')
const path = require('path')
const data_order = require('./../../data/orders.json')

class Order{

    constructor(complexity, priority){
        this._id = uuid()
        this._complexity = complexity
        this._priority = priority
        this._time = Date.now() 
    }

    array_orders(){
        return {
            id: this._id,
            complexity: this._complexity,
            priority: this._priority,
            time: this._time
        }
    }

    async write_file_data_order(){
        const orders = await Order.read_file_data_order()
        orders.push(this.array_orders())
        orders.sort(function(a, b){
            const c =  a.priority - b.priority
            if(c){
                a.time - b.time
            }
            return c
        })
        
        return new Promise((resolve, reject) => {
            fs.writeFile(
            path.join(__dirname, '..', '..', 'data', 'orders.json'),
            JSON.stringify(orders),
            (err) => {
                if(err){
                    reject(`${err} ошибкааааааааа`)
                }else{
                    resolve()
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

}

module.exports = Order