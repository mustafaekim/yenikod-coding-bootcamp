/*
    Object.prorotype.hasOwnProperty() 
        method returns a boolean indicating whether the object has the specified property as own (not inherited) property.
*/

var user = {
    name: "Mustafa"
    , age: 35
    , car: ferrari
}
Object.defineProperty(user, "age", { enumerable: false });


var ferrari = {
    model: 2001
}

console.log("(1)", user.hasOwnProperty("name")); // -> true
console.log("(2)", user.hasOwnProperty("age")); // -> true (does not care whether the property is enumerable or not)
console.log("(3)", user.hasOwnProperty("car")); // -> true
console.log("(4)", user.hasOwnProperty("model")); // -> false
console.log("(5)", user.hasOwnProperty("constructor")); // -> false (even though constructor is a property in the user prototype chain)
console.log("(6)", user.constructor.name); // -> Object

