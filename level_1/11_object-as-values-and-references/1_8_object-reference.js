// When comparing objects, == operator returns true if both objects are the same object
// Comparing different objects will return false even if they have identical contents

console.log({ name: "Mustafa" } == { name: "Mustafa" }) // false

var mustafa = { name: "Mustafa" }
var mySelf = { name: "Mustafa" }
var another = mustafa;
console.log(mustafa == mySelf);
console.log(another == mustafa); // the variables point to the same object


