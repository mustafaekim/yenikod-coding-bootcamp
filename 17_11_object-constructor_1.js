/*
    {}, new Object(), Object.create(Object.prototype)
        all return the same kind of object. An object who's prototype is Object.prototype
*/

var user = new Object();
console.log("(1)", Object.prototype.isPrototypeOf(user), "--> new Object() creates an object having its prototype set to Object.prototype");

var car = Object.create(Object.prototype);
console.log("(2)", Object.prototype.isPrototypeOf(car), "--> Object.create(Object.prototype) creates an object having its prototype set to Object.prototype");

var bar = {};
console.log("(3)", Object.prototype.isPrototypeOf(bar), "--> {} object literal creates an object having its prototype set to Object.prototype");

/*
 Object.prototype.__proto__ returns the prototype object
*/
console.log("(4)", user.__proto__ === Object.prototype, "--> user.__proto__ refers to the Object.prototype object");


/*
    The Object constructor creates an object wrapper for the given value. 
    If the value is null or undefined, it will create and return an empty object, 
    otherwise, it will return an object of a Type that corresponds to the given value. 
    If the value is an object already, it will return the value.
*/

var baz = new Object(null);
console.log("(5)", Object.prototype === baz.__proto__, " --> new Object(null) returns an (empty) object whose prototype is Object.prototype");

var caz = new Object(undefined);
console.log("(6)", Object.prototype === caz.__proto__, " --> new Object(undefined) returns an (empty) object whose prototype is Object.prototype");

var foo = new Object({firstName: "Mustafa"}); // -> returns {firstName: "Mustafa"}, which is already new Object() with additional properties
console.log("(7)", Object.prototype === foo.__proto__, " --> new Object() with a given value, returns an object whose prototype is Object.prototype");
console.log("(8)", foo.firstName);

// Hence, all objects have Object.prototype in its prototype chain. __proto__ or, __proto__.__proto__ or ...
var moo = Object.create(bar) // Create an object whose prototype is bar
console.log("(9)", Object.prototype == moo.__proto__, "--> false because moo's prototype is bar");
console.log("(10)", bar == moo.__proto__, "--> true because moo's prototype is bar");
console.log("(11)", Object.prototype == moo.__proto__.__proto__, "--> true because moo's prototype is bar, bar's prototype is Object.prototype");
console.log("(12)", Object.prototype.isPrototypeOf(moo), "--> yes because Object.prototype is in the prototype chain of moo")
console.log("(13)", Object.prototype.isPrototypeOf(bar), "--> yes because Object.prototype is in the prototype chain of bar")