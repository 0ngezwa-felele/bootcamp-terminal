let assert = require("assert");
let yearsAgo = require("../yearsAgo")


describe('yearsAgo function' , function(){
    it('return how many years ago that year is from the current year', function(){
        assert.equal(yearsAgo(2000),21);
    });
         it('return how many years ago that year is from the past year.' , function(){
         assert.equal(yearsAgo(1999),22);
  });
  
   });