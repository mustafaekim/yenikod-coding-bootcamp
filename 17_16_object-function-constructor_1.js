function C() {} // Hey, I am an object! Call me C
function D() {} // Hey, I am an object! Call me D
// just like var C = new Function();

/*
console.log("(1)", "Object object is constructed by -->", Object.constructor);
console.log("(2)", "Function object is constructed by -->", Function.constructor);
console.log("(3)", "Array object is constructed by -->", Array.constructor);
*/

var adder = new Function('a', 'b', 'return a + b');
console.log("(1)", adder(5,4)); // -> 9
console.log("(2)", "adder.constructor-->", adder.constructor);


// Function has an extended prototype property. But Function's property calls fallbacks to Object.prototype's property calls because Function.prototype.__proto__ is Object.prototype
// hence, Function.prototype.__proto__ === Object.protype
// Function.prototype is special! It cannot be modified
console.log("(2)", Function.prototype.__proto__ === Object.prototype);

console.log("(3)", Function.__proto__);

// Let's continue..

var c1 = new C();

// When a function is a constructor, it's prototype is assigned into the __proto__ property of the object it constructs
console.log("(3)", Object.getPrototypeOf(c1) ===  c1.__proto__); // --> true
console.log("(4)", Object.getPrototypeOf(c1) === C.prototype); // --> true

// By default, because function is an object, Function.prototype is actually Object.prototype!
console.log("(5)", C.prototype.__proto__ == Object.prototype);

// The instanceof operator tests the presence of constructor.prototype in object's prototype chain.

// instanceof looks in the prototype chain
console.log("(6)", C instanceof Function); // -> true
console.log("(7)", C instanceof Object); // -> true because Function.prototype is Object.prototype which is constructed by Object

// true, because: Object.getPrototypeOf(c1) === C.prototype
c1 instanceof C; // is c1.__proto__ === C.prototype ? If not, is c1.__proto__.__proto__ === c1.prototype ? If not ...