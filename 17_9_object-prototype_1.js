/*
    The a property doesn't actually exist on the bar object, 
    but because bar is prototype-linked to foo, 
    JavaScript automatically falls back to looking for a on the foo object, where it's found.
*/


var foo = {
    a: 42
};

// create `bar` and link it to `foo`
var bar = Object.create(foo);

bar.b = "hello world";
console.log("(1)", bar.hasOwnProperty("b"));

console.log("(1)", bar.b);		// "hello world"
console.log("(2)", bar.a);		// 42 <-- delegated to `foo`

console.log("(3)", typeof bar.__proto__); // object
console.log("(4)", bar.__proto__ === foo); // -> true
console.log("(5)", bar.__proto__.a); // -> 42, there you are


var foo = Object.create(null);
console.log(foo.__proto__);
try { foo.hasOwnProperty("anyProperty") }
catch (ex) { console.log("foo.__proto__ is null") }