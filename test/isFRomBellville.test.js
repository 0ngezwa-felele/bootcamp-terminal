let assert = require("assert");
let isFromBellville = require("../isFromBellville")


describe('isFromBellville function' , function(){
    it('should return true if the reg number is from Bellville' , function(){
        assert.equal(isFromBellville("CY 123 432"),true);
    });
    it('should return false if the reg number is not from Bellville' , function(){
      assert.equal(isFromBellville("CA 123 432"),false);
  });
  
  });