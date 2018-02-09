var assert = require('assert');
var { MarryOffice } = require('../model/marry-office.js')
var { User } = require("../model/user.js");

describe('Marry Office', function () {


    describe('Marriage', function () {
        it('should create a new marriage between 2 users', function () {

            var mustafa = new User("Mustafa");
            var boriana = new User("Boriana");


            var mo = new MarryOffice();

            var result;
            
            result = mo.marry(mustafa, boriana);
            assert.equal(result, true);
            assert.equal(mo.getMarriages().length,1, "There is only 1 marriage applied");
            assert.equal(mo.getMarriages()[0].getPartner(mustafa), boriana);
            assert.equal(mo.getMarriages()[0].getPartner(boriana), mustafa);
            
            assert.equal(mo.getMarriages()[0].getPartner(new User("test")), null);

            assert.equal(mo.getCoupleOf(mustafa), boriana);
            assert.equal(mo.getCoupleOf(boriana), mustafa);


            result = mo.marry(mustafa, boriana);
            assert.equal(result, false);
        });
    });


});