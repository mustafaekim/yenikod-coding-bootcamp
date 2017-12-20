/*
    The delete operator removes a property from an object.
        - returns true for all cases except when 
            the property is an own non-configurable property, in which case, 
                false is returned in non-strict mode.
                exception is throw in strict mode

        - properties declared by var, let, const or function are non-configurable, hence cannot be deleted by default.
        - delete  
        - If the property which you are trying to delete does not exist, delete will not have any effect and will return true
        - delete only has an effect on own properties
*/

"use strict";

var user = {
    name: "Ahmet"
    , age: 35
    , car: ferrari
    , nickname: "MauL"
}

var ferrari = {
    model: 2001
    , fake: false
}

var me = Object.create(user);
me.school = "Mkool";
me.address = "Kadikoy";
me.name = "Mustafa";

Object.defineProperty(me, "address", { writable: false });
Object.defineProperty(me, "school", { configurable: false });

/* - */

// what if I try to remove a property that does not exist?
console.log("(1)", delete me.somePropertyThaDoesNotExist); // -> true!

try {
    // can I remove me.school which is not configurable?
    console.log("(2)", delete me.school); // -> false
}
catch (e) { console.log("(2)", e.name, e.message) }


// can I remove me.address which is not writable?
console.log("(3)", delete me.address) // -> true

// can I remove me.__proto__.age which is a parent property
console.log("(4)", delete me.__proto__.age); // -> true

// what if I remove me.name ?
console.log("(5)", delete me.name); // -> true
console.log("(6)", me.name); // -> me.__proto__.name is returned
//what if I remove me.__proto__.name ?
console.log("(7)", delete me.__proto__.name); // -> true
console.log("(8)", me.name); // -> undefined

// Can I remove a property on the prototype chain?
console.log("(9)", delete me.nickname) // -> returns true! because me.nickname does not exist as a direct property!
console.log("(10)", me.nickname);

// I can only delete direct-property, so
console.log("(11)", delete me.__proto__.nickname); // -> true
console.log("(12)", me.nickname) // -> undefined