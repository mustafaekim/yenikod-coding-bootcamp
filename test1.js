 console.log(Function.prototype.constructor == Function) // true
 console.log(Function.__proto__ == Function.prototype) // true
 console.log(Function.__proto__.constructor == Function) // true


function Y(){}

var foo = new Y();
console.log(foo.__proto__ == Y.prototype) // true
console.log(foo.__proto__.constructor == Y) // true


console.log(Y.__proto__.constructor == Function); //  true`
console.log(Y.__proto__ == Function.prototype); // true
