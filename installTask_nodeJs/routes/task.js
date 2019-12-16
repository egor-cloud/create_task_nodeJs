const router = require('express').Router()
const Order = require('./../models/order')
const handlers = require('./../../data/handlers.json')
const complete = require('./../../data/completeHandlers.json')
const fs = require('fs')
const path = require('path')

router.get('/', async (req, res) => {  
    const orders =  await Order.read_file_data_order()
    const task = await read_file_data_handler()
    const completeTask = await read_file_data_completeHandlers()
    res.render('task',{
        orders,
        completeTask,
        task
    })
})

function read_file_data_handler(){
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

function read_file_data_completeHandlers(){
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
  
module.exports = router
