let assert = require("assert");
let findItemsOver20 = require("../findITemsOver20")



describe('findItemsOver20 function' , function(){
    var productList= [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
    it('should return the products with a quantity higher than 20' , function(){
        

        assert.deepEqual(findItemsOver20(productList),[{"name":"pears","qty":37},{"name":"bananas","qty":27}])

    });
        it('should return the products with a quantity lesser than 20' , function(){
        

        assert.deepEqual(findItemsOver20([{name : 'apples', qty : 10},
        {name : 'pears', qty : 1},
        {name : 'bananas', qty : 12},
        {name : 'apples', qty : 3},
    ]),[]);
    });

});