/* 
    Avoid using == with Mixed types (values having different types)
    because by using == operator you allow coercion, which makes a call to valueOf function of the object
*/

console.log("(1)", new Boolean(true).valueOf(), new Boolean(6).valueOf()); // true true
console.log("(2)", new Boolean(true).valueOf() == new Boolean(6).valueOf()); // true ..

console.log("(3)",  6 == { valueOf: function () { return 6 } }) // true!

console.log("(4)", null == undefined); // -> true!


// Prefer using === for mixed types so that implicit coercion does not surprise you
