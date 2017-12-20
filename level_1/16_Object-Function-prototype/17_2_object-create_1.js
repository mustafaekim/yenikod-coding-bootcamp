/*
    Object.create() 
        method creates a new object with the specified prototype object and properties.
*/

var user = {
    name: "Mustafa"
}

// Recall that object literal constructs an object just like new Object()
// Hence
console.log("(1)", user.__proto__ == Object.prototype); // -> true

var student = Object.create(user);

console.log("(2)", student.__proto__ == user); // -> true

// hence
console.log("(3)", student.name); // -> "Mustafa"

// hence
user.age = 35;
console.log("(4)", user.age, student.age); // -> 35 35 // the same

// What's student.__proto__.__proto__ ?
console.log("(5)", student.__proto__.__proto__ == Object.prototype); // -> true
// Hence
console.log("(6)", student.constructor == Object); // -> true, because student.__proto__.__proto__ is Object.prototype and Object.prototype.constructor points Object


// What's student.__proto__.__proto__.__proto__ ?
console.log("(7)", student.__proto__.__proto__.__proto__ == null); // -> true

// That's the prototype chain.
console.log("(8)", Object.prototype.isPrototypeOf(user)); // -> true
console.log("(9)", user.isPrototypeOf(student)); // -> true
console.log("(10)", Object.prototype.isPrototypeOf(student)); // -> true!

// The reverse is not true
console.log("(11)", user.isPrototypeOf(Object.prototype)); // -> false
console.log("(12)", student.isPrototypeOf(user)); // -> false
console.log("(13)", student.isPrototypeOf(Object.prototype)); // -> false

/* 2 */
// Let's do out Object.create

var myObjectDotCreate = function(o){
    function F(){}
    F.prototype = o;
    return new F();
}

var myNewObj = myObjectDotCreate(user);
console.log("(14)", myNewObj.__proto__ == user); // -> true
