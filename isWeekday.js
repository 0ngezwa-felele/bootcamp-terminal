module.exports=function(weekday){
    if(weekday.startsWith('M') || weekday.startsWith('T') || weekday.startsWith('W')||weekday.startsWith('F')){
    return true;
    }
     else if(weekday.startsWith('S')){
     return false;
     }
   }
   