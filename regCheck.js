module.exports=function(regNo, regEnd){
    console.log(regEnd)
   if (regNo.includes(regEnd)){
     return true;
   }else{
     return false;
   }
  }