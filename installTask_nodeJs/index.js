const express = require('express')
const fs = require('fs')
const path = require('path')
const Handlebars = require('express-handlebars')
const bodyParser = require("body-parser")
// const db_connection = require('./connection_db')
const home = require('./routes/home')
const task = require('./routes/task')
const app = express()
const port = 3000
// ------------------------------------------------------middleewere---------------------------------------

app.use(bodyParser.urlencoded({extended: false}))
app.use("/", home)
app.use("/task", task)

const handlebars_config = Handlebars.create({
  defaultLayout: 'main',
  helpers: require('./utils/helper')
})

app.engine('handlebars', handlebars_config.engine );
app.set('views', './views')
app.set('view engine', 'handlebars')

// async function start(){
//   try { 
    // await db_connection.sync({force: true})
    app.listen(port, function() {
      console.log(`Server listens port:${port}`)
    }) 
//   } catch (error) {
//     console.error(error)
//   }
// }

// start()