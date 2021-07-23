module.exports=function(regNum){
    console.log(regNum)
    var RegList = regNum.split(', ');
    var list= []
    for(var i = 0; i< RegList.length; i++){
      if (RegList[i].startsWith("CJ")){
        list.push(RegList[i]);
  }
    }
    return list.length
  }