module.exports=function(productList){
    console.log(productList)
   var salesDataMap = {};
   var productList1 = [];
   //mapping the data and its as departments and sales total
     for(var i=0;i<productList.length; i++){
        //var theSales = productList[i];
       if(salesDataMap[productList[i].department] == undefined){
             salesDataMap[productList[i].department] = productList[i].sales;
         }
       else{
               salesDataMap[productList[i].department] += productList[i].sales;
           }
   }
     // Loop the map to find the bigger department value
   console.log(salesDataMap);
    var currentMaxSalesDepartment = 0;
   var theDepart = "";
   for (var salesDataDepartment in salesDataMap) {
       var currentTotal = salesDataMap[salesDataDepartment];
     if(currentTotal > currentMaxSalesDepartment){
       currentMaxSalesDepartment = currentTotal;
            theDepart = salesDataDepartment;
        }
   }
    console.log(theDepart);
   return theDepart;
 }
 