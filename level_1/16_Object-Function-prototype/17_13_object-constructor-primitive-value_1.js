/*
    Object constructor given a primitive value returns new String, new Number, new Boolean ...
        new Object(10) returns new Number(10)
        new Object("10") returns new String("10")
        new Object(true) returns new Boolean(true)
*/



var ten = new Object(10); // same as new Number(10)
console.log("(1)", ten == 10); // cohersion occurs
console.log("(2)", ten === 10); // cohersion now allowed


// Hence ..
console.log("(3)", String("10") == String("10")); // -> true
console.log("(4)", new String("10") == new String("10")); // -> false
console.log("(5)", new Object("10") == new Object("10")); // -> false

console.log("(6)", Number(10) == Number(10)); // -> true
console.log("(7)", new Number(10) == new Number(10)); // -> false
console.log("(8)", new Object(10) == new Object(10)); // -> false

console.log("(9)", Boolean(true) == Boolean(true)); // -> true
console.log("(10)", new Boolean(true) == new Boolean(true)); // -> false
console.log("(11)", new Object(true) == new Object(true)); // -> false