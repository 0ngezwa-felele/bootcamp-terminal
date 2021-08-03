let assert = require("assert");
let regCheck = require("../regCheck")



describe('regCheck function' , function(){
    it('should return true if the reg number ends with GP', function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });
         it('should return true if the reg number ends with L', function(){
            assert.equal(regCheck('DV 23 NB L', 'L'),true);

    });

    it('should return true if the reg number ends with EC', function(){
        assert.equal(regCheck('DV 23 NB EC', 'EC'),true);

});
    it('should return true if the reg number ends with MP', function(){
    assert.equal(regCheck('DV 23 NB MP', 'MP'),true);

});
it('should check  if a registration number is for GP, L, EC, MP registration plates and returns false if not' , function(){
    assert.equal(false,regCheck("CJ 1992", 'CA'));

});
});
