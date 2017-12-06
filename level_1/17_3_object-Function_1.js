/*
    All functions except Function are constructed via new Function()
        -> 1) All constructor calls return an object. Hence all functions (which are an output of new Function()) are indeed objects.
        -> 2) That's why all functions' __proto__ is Function.prototype, which is a function.

    All functions' prototype is an object whose __proto__ is Object.prototype
        Whereas Function.prototype == Function.__proto__ (Function is the only function which gives birth to itself)

    All functions' prototype (which is set by new Function()) are unique objects

    Lastly, only Function.prototype is a function. All other functions' prototype are objects
        Only Function.prototype == Function.__proto__ (function's prototype != __proto__)

    Both Function.prototype.__proto__ and functions' prototype.__proto__ are Object.prototype

    Only functions have prototype. Function's prototype is it's proto
*/

function Y(){}
function Z(){}

console.log("(1)", Z.__proto__ == Function.prototype); // -> true
console.log("(2)", Y.__proto__ == Function.prototype); // -> true
console.log("(3)", Y.__proto__ == Z.__proto__); // -> true

// A function's prototype points itself
console.log("(4)", Z.prototype.constructor == Z); // -> true
console.log("(5)", Y.prototype.constructor == Y); // -> true

var y1 = new Y();
// objects constructed by a function, can find their constructor function through __proto__.constructor
console.log("(6)", y1.__proto__ == Y.prototype); // -> true
console.log("(7)", y1.__proto__.constructor == Y); // -> true

// What if a function's prototype is another object whose __proto__ is Y.prototype
function W(){}
W.prototype = Object.create(Y.prototype);
console.log("(8)", W.prototype.__proto__ == Y.prototype);

// Let's add a property to Y.prototype
Y.prototype.nickname = "Y";

// Let's add a property to W.prototype
W.prototype.age = 15;

// Let's construct an object by W
var w1 = new W();
console.log("(9)", w1.age, w1.nickname); // 15 Y

// That's the function prototype chain