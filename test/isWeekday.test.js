let assert = require("assert");
let isWeekday = require("../isWeekday")


describe('isWeekday function' , function(){
    it("should find out if the parameter passed in is a day of the week" , function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it("should return false if the parameter passed in in not a day of the week" , function(){
        assert.equal(isWeekday('Saturday'), false);
    });
});