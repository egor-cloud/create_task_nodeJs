const fs = require('fs')
const path = require('path')
const Task = require('./models/task')

async function result(){ 
    while(true){  
        await sleep(1000)
        await Task.result()
    }
}

function sleep(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms)
    })
}

result()


