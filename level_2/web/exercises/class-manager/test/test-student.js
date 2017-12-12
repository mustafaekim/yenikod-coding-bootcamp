var assert = require('assert');

var Student = require("../domain/student")


/*
    My Tests on Student
*/
describe('Student', function () {
    it('new Student-s properties and constructor should be set correctly', function () {
        var aStudent = new Student(1, "Mustafa", "Ekim", "ekim.mustafa@gmail.com", "+90 533 357 49 19");
        assert.strictEqual(aStudent.userId, 1);
        assert.strictEqual(aStudent.firstName, "Mustafa");
        assert.strictEqual(aStudent.lastName, "Ekim");
        assert.strictEqual(aStudent.email, "ekim.mustafa@gmail.com");
        assert.strictEqual(aStudent.mobile, "+90 533 357 49 19");
        
        assert.strictEqual(aStudent.constructor, Student);
    });
});

