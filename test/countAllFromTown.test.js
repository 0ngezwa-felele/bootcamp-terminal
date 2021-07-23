let assert = require("assert");
let countAllFromTown = require("../countAllFromTown")

describe('countAllFromTown function' , function(){
    it('should return the number of registration numbers in the string that is for that town' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);

    });
    it('should also take the registration numbers that is not for that town' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CA 123'),0);
});
});