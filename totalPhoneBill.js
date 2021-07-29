module.exports=function(phone){
    // console.log(phone)
    var callNum = phone.split(",");
    var counter = 0
    for( var i = 0; i<callNum.length; i++){
    if (callNum[i].includes("call")){
      counter += 2.75
  }else if (callNum[i].includes("sms")){
    counter += 0.65
  }
    }
    return "R" + counter.toFixed(2)
  }