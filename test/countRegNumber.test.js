let assert = require("assert");
let countRegNumber = require("../countRegNumber")


describe('countRegNumber function' , function(){
    it('should return the number of registration numbers in a string' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
    });
     it('should return the number of the registration numbers in a string ' , function(){
         assert.equal(countRegNumber('CA 123' ),1);
});
 });