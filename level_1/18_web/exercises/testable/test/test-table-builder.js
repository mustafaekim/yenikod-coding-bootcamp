var assert = require('assert');

var app = require("../app.js");

//var calc = require('./calc.js');

// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Table Builder', function() {
	// And then we describe our testcases.
	it('app exports and object with a property whose value is a function', function() {
        assert.equal(typeof app.tableBuilder, "function");		
    });
    

    it('single header works', function(){
        let tableHtml = app.tableBuilder(["name"], []);
        assert.equal(tableHtml, "<table><tr><th>name</th></tr></table>")
    })

    it('double headers work', function(){
        let tableHtml = app.tableBuilder(["name", "age"], []);
        assert.equal(tableHtml, "<table><tr><th>name</th><th>age</th></tr></table>")
    })

    it('double headers with 1 row', function(){
        let tableHtml = app.tableBuilder(["name", "age"], [["Mustafa", 35]]);
        assert.equal(tableHtml, 
            "<table><tr><th>name</th><th>age</th></tr><tr><td>Mustafa</td><td>35</td></tr></table>")
    })

    it('double headers with 2 rows', function(){
        let tableHtml = app.tableBuilder(["name", "age"], [["Mustafa", 35], ["Talip", 24]]);
        assert.equal(tableHtml, 
            "<table><tr><th>name</th><th>age</th></tr><tr><td>Mustafa</td><td>35</td></tr><tr><td>Talip</td><td>24</td></tr></table>")
    })

});