let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill")



describe('totalPhoneBill function' , function(){
    it('should calculate the total bill for sms' , function(){
        assert.equal(totalPhoneBill('sms'), "R" + 0.65);
    });
    it('should calculate the total bill for call' , function(){
        assert.equal(totalPhoneBill('call'), "R" + 2.75);
    });
    it('should calculate the total bill for 2 calls and  1 sms' , function(){
        assert.equal(totalPhoneBill('call,sms,call'), "R" + 6.15);
   });
    it('should calculate the total bill for 2 calls and 3 sms' , function(){
    assert.equal(totalPhoneBill('call,sms,call,sms,sms'), "R"+ 7.45);
});   
});