module.exports = {
    length(task, int, options){
    if(task == int){
      return options.fn(this)
    }else{
        return options.inverse(this)
    }
  }
}