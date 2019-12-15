const fs = require('fs')
const path = require('path')
const CompleteTask = require('./models/completeTask')

async function complete(){
    while(true){
        await CompleteTask.result()
        await sleep(1000)
    }
}

function sleep(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve, ms)
    })
}

complete()
