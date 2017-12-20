/* 
    The in operator returns true if the specified property is in the specified object or its prototype chain
*/

var me = {
    name: "Mustafa"
    , age: 35
    , car: ferrari
}
Object.defineProperty(me, "age", { writable: false, enumerable: false, configurable: false })

var ferrari = {
    model: 2001
}

var ahmet = Object.create(me);

console.log("(1)", "name" in me); // -> true
console.log("(2)", "age" in me); // -> true (even though age is not writable, configurable and enumerable)
console.log("(3)", "car" in me); // -> true 
console.log("(4)", "ferrari" in me); // -> false 
console.log("(5)", "model" in me); // -> false

console.log("(6)", "name" in ahmet) // -> true


