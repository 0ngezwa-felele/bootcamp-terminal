let assert = require("assert");
let countAllPaarl= require("../countAllPaarl")

describe('countAllPaarl function' , function(){
    it('should return the number of registration numbers in the string for Paarl' , function(){
        assert.equal(countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"),3);

    });
    it('should return 0 if there are no registration numbers for Paarl on the string' , function(){
        assert.equal(countAllPaarl("CA 345 123,  CL 123-546, CK 345"),0);
    });

});