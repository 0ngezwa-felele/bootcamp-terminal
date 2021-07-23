let assert = require("assert");
let regCheck = require("../regCheck")



describe('regCheck function' , function(){
    it('should return true if the reg number is from Gauteng', function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });
         it('should return true if the reg number is from Limpopo', function(){
            assert.equal(regCheck('DV 23 NB L', 'L'),true);

    });

    it('should return true if the reg number is from Eastern Cape', function(){
        assert.equal(regCheck('DV 23 NB EC', 'EC'),true);

});
    it('should return true if the reg number is from Mpumalanga', function(){
    assert.equal(regCheck('DV 23 NB MP', 'MP'),true);

});
    it('should return false if the reg number is not from GP,L,EC,MP' , function(){
      assert.equal(regCheck("123 CA",'ZN','ZN'),false);
  });
  
  });