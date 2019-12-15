const router = require('express').Router()
const Order = require('./../models/order')
const Task = require('./../../handlerTask_nodeJs/models/task')
const CompleteTask = require('./../../completeTask_nodeJs/models/completeTask')

router.get('/', async (req, res) => {  
    const orders =  await Order.read_file_data_order()
    const task = await Task.read_file_data_handler()
    const completeTask = await CompleteTask.read_file_data_completeHandlers()
    res.render('task',{
        orders,
        completeTask,
        task
    })
})
  
module.exports = router
