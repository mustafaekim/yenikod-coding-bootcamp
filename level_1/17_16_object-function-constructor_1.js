console.log("(1)", "Object object is constructed by -->", Object.constructor);
console.log("(2)", "Function object is constructed by -->", Function.constructor);
console.log("(3)", "Array object is constructed by -->", Array.constructor);

function C() {} // Hey, I am an object! Call me C
function D() {} // Hey, I am an object! Call me D
// just like var C = new Function();

var adder = new Function('a', 'b', 'return a + b');
console.log("(4)", adder(5,4)); // -> 9
console.log("(5)", "adder.constructor-->", adder.constructor);


// Function has an extended prototype property. But Function's property calls fallbacks to Object.prototype's property calls because Function.prototype.__proto__ is Object.prototype
// hence, Function.prototype.__proto__ === Object.protype
// Function.prototype is special! It cannot be modified
console.log("(6)", Function.prototype.__proto__ === Object.prototype);

console.log("(7)", Function.__proto__);

// Let's continue..

var c1 = new C();

/*
     When a function is a constructor (constructor call) it's prototype is assigned into the __proto__ property of the object it constructs
     -> Object.getPrototypeOf()
     -> obj.constructor.prototype (obj.constructor points to the function that created the object and .prototype point the object the function linked the object as the obj.__proto__)
     -> obj.__proto__ (bad name, but standardized!)
*/


console.log("(8)", Object.getPrototypeOf(c1) ===  c1.__proto__); // --> true 
console.log("(9)", Object.getPrototypeOf(c1) === C.prototype); // --> true

// By default, because function is an object, Function.prototype is actually Object.prototype!
console.log("(10)", C.prototype.__proto__ == Object.prototype);

// The instanceof operator takes a plain object as its lefthand operand
// and a function as its righthand operand. The question instanceof
// answers is: in the entire [[Prototype]] chain of a, does the object
// arbitrarily pointed to by Foo.prototype ever appear?

// instanceof looks in the prototype chain
console.log("(11)", C instanceof Function); // -> true
console.log("(12)", C instanceof Object); // -> true because Function.prototype is Object.prototype which is constructed by Object

// true, because: Object.getPrototypeOf(c1) === C.prototype
console.log("(13)", c1 instanceof C); // is c1.__proto__ === C.prototype ? If not, is c1.__proto__.__proto__ === c1.prototype ? If not ...

