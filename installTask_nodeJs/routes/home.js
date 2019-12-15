const router = require('express').Router()
const Order = require('./../models/order')


router.post('/', async (req, res) => {
    const order = new Order(req.body.complexity, req.body.priority)
    await order.write_file_data_order()
    res.redirect('/task')
})

router.get('/', (req, res) => {
    res.render("home", {
      title: 'is_home'
    }),(err) => {
      console.error(err)
    }
  })

module.exports = router