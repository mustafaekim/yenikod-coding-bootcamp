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
            
            assert.equal(mo.getMarriages()[0].isBetween(mustafa, boriana), true);
            assert.equal(mo.getMarriages()[0].isBetween(boriana, mustafa), true);
            assert.equal(mo.getMarriages()[0].isBetween(mustafa, {}), false);
            
            assert.equal(mo.getMarriages()[0].getPartner(new User("test")), null);

            assert.equal(mo.getCoupleOf(mustafa), boriana);
            assert.equal(mo.getCoupleOf(boriana), mustafa);


            result = mo.marry(mustafa, boriana);
            assert.equal(result, false);
        });

        it('should create multiple marriages', function(){
            var user1 = new User("user1");
            var user2 = new User("user2");
            var user3 = new User("user3");
            var user4 = new User("user4");

            var mo = new MarryOffice();
            mo.marry(user1, user2);
            assert.equal(mo.getNoOfMarriages(), 1);

            mo.marry(user3, user4);
            assert.equal(mo.getNoOfMarriages(), 2);
        })


        it('should divorce an existing marriage', function(){
            var mustafa = new User("Mustafa");
            var boriana = new User("Boriana");
            var mo = new MarryOffice();

            mo.marry(mustafa, boriana);
            var result = mo.divorce(mustafa,boriana);

            assert.equal(result, true);
            
            
            var talip = new User("Talip");
            result = mo.divorce(talip, mustafa);
            assert.equal(result, false);
        })
    });


});