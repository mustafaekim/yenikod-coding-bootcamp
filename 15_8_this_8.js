"use strict"

var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function getFullname(lastname) {
            return this.fullname + " " + lastname;
        }
    }
};

var test = obj.prop.getFullname;

console.log(test.call({ fullname: "Hakkı" }, "Ekim"));
console.log(test.call({ dullname: "Hakkı" }, "Ekim"));



