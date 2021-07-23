let assert = require("assert");
let greet = require("../greet");
describe('greet function' , function(){
    it('Should return Hello, Ongezwa' , function(){

        assert.equal('Hello, Ongezwa', greet('Ongezwa'));
    });
    it('Should return Hello, Avuzwa' , function(){
        assert.equal('Hello, Avuzwa', greet('Avuzwa'));
    
});
});