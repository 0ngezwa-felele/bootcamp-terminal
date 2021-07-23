let assert = require("assert");
let fromWhere= require("../fromWhere");

describe('fromWhere function' , function(){
    it('should  return CapeTown if the car is from CapeTown' , function(){
        assert.equal(fromWhere('CA'),"Cape Town");
    });
        it('should  return Paarl if the registration number starts with CJ' , function(){
        assert.equal(fromWhere('CJ'),"Paarl");
    });
        it('should  return Bellville if the registration number starts with CY' , function(){
        assert.equal(fromWhere('CY'),"Bellville");
    });
        it('should  return Some other place if the town is not specified' , function(){
        assert.equal(fromWhere(''),"Some other place!");
    });
});