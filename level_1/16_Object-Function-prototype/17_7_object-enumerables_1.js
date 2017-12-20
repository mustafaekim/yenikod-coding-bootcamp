/*
    Object.keys returns only enumerable property keys (ignores prototype chain)
    Object.getOwnPropertyNames: returns all property keys (ignores prototype chain)
    Object.prototype.propertyIsEnumerable
*/

var user = {
    firstName: "Mustafa",
    lastName: "Ekim",
    age: 35,
    get fullName(){
        return this.firstName + " " + this.lastName
    }
}

Object.defineProperty(user, "firstName", { enumerable: false});

console.log("(1)", Object.keys(user));
console.log("(2)", Object.getOwnPropertyNames(user));

console.log("(3)", user.propertyIsEnumerable("firstName"));
console.log("(4)", user.propertyIsEnumerable("lastName"));