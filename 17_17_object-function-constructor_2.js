// defining constructors
function C() {}
function D() {}

var o = new C();

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D;

o instanceof Object; // true, because:
C.prototype instanceof Object // true 
// -> you can treat C like an object because I am an instance of Object, which means in my prototype chain, there is Object
// -> hence C.hasOwnProperty falls back to Object.prototype.hasOwnProperty
console.log(C.hasOwnProperty("name")) // -> true because Function objects have name property and their protoype chain have hasOwnProperty property

C.prototype = {}; // we create a NEW object!!! previous object that C constructed would not point this NEWLY created object!!!
var o2 = new C();

o2 instanceof C; // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
console.log(o instanceof C); // can I treat "o" as if it is constructed by C? NO!

D.prototype = new C(); // add C to [[Prototype]] linkage of D
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true since C.prototype is now in o3's prototype chain

/*
    An object is an instanceof a function only if function.prototype is in the __proto__ chain of the object
    If function.prototype is in the object's __proto__ chain, then object will fall back to function.prototype hence it can be treated as if it is an instance of the function
*/