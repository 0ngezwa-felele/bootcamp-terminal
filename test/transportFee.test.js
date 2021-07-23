let assert = require("assert");
let transportFee = require("../transportFee")


describe('transportFee function' , function(){
    it('should return R20 if the shift is morning' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return R10 if the shift is Afternoon' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    
    });
        it('should return free if the shift is nightshift' , function(){
         assert.equal(transportFee('nightshift'), 'free');
    
     });
});