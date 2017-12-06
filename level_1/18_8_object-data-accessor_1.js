/*
    myObj.foo = "bar"

    1-) If a normal data accessor is found anywhere in the prototype chain 
            - if it's writable, a new property called foo is added directly to the myObj
            - else, error in strict mode
    2-) If foo is found on the prototype chain and that it's a setter, the setter will be called
*/

"use strict";


var myObj = {
    model: 2001
    , set name(name) {
        this.fullName = name;
    }

    , set age(age) {
        Object.defineProperty(myObj, "old", { value: age > 35 });
    }
};
Object.defineProperty(myObj, "foo", { value: "bar", writable: false });

/* 1 */
console.log("(1)", myObj.foo);
try {
    myObj.foo = "newBar";
    console.log("(2)", "Unreachable statement");
}
catch (e) { console.log("(2)", "foo is NOT writable"); }

/* 2 */
myObj.name = "Mustafa";
console.log("(3)", myObj.name); // -> undefined because there is a setter for name and there is no getter for name
console.log("(4)", myObj.fullName); // -> Well, here it is


/* 3 */
var obj2 = Object.create(myObj);
try {
    obj2.foo = "Hop!";
    console.log("(5)", "Unreachable statement");
}
catch (e) { console.log("(5)", "foo is in the prototype chain and it's NOT writable") }

/* 4 */
obj2.name = "Ahmet"; // -> goes to setter on the prototype chain
console.log("(6)", obj2.fullName); // "Ahmet"
console.log("(7)", obj2.hasOwnProperty("name")); // false
console.log("(8)", obj2.hasOwnProperty("fullName")); // true! Oh, this!

/* 5 */
obj2.age = 39; // -> goes to setter on the prototype chain
console.log("(9)", obj2.old); // true
console.log("(10)", obj2.hasOwnProperty("old")); // false! Oh, defineProperty!

/* 6 */
console.log("(11)", obj2.hasOwnProperty("model")); // false
obj2.model++;
console.log("(12)", obj2.hasOwnProperty("model")); // true! Re-assignment as value!
console.log("(10)", obj2.model); // 2002

