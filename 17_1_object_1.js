/*
    Object literal sythax
    delete property
    hasOwnProperty (function comes through inheritance of Object.prototype)
    in operator (checkes prototype chain)
    Object.keys returns only enumerable property keys (ignores prototype chain)
    getOwnPropertyNames: returns all property keys (ignores prototype chain)
*/

var user1 = {
    name: "Mustafa"
    , age: 35
    , school: undefined
}

// same with

var user2 = new Object();
user2.name = "Mustafa"
user2.age = 35;


// delete property
delete user1.age;
console.log("(1)", user1);

// Object.keys
console.log("(2)", Object.keys(user1));

// hasOwnProperty
console.log("(2)", user1.school == user1.age); // -> true because if property does not exists, it again returns undefined!


// All objects have hasOwnProperty function which returns whether the object has the property given
console.log("(3)", user1.hasOwnProperty("school")); // -> true
console.log("(4)", user1.hasOwnProperty("age")); // -> false

// or using in operator
console.log("(5)", "school" in user1); // -> true
console.log("(6)", "age" in user1); // -> false