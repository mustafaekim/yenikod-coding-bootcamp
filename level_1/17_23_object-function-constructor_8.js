/*
    All objects created by Function constructor (which means, all functions)
    have their prototype property set to an object which is a clone of a readonly-internal object
    new Function() -> returns an object, whose prototype property is set to a clone of this readonly-internal object


    All function instances have their own copy prototype object

    You can modify Function.prototype but can't modify its clone 
    which is set as prototype object of the function instance, every time you create a new function
*/

function User(){
    this.name = "Mustafa"
}

console.log("(1)", Function.prototype == new Function().__proto__); // -> true, as expected
console.log("(2)", new Function().prototype == new Function().prototype); // -> false!
/*
    All Function instances have their own original copy of prototype object!
*/

// Objects do not have prototype property
console.log(new User().prototype == undefined)  // -> true
console.log(new Object().prototype == undefined)  // -> true
console.log(new Array().prototype == undefined)  // -> true
console.log(new Date().prototype == undefined)  // -> true
console.log({}.prototype == undefined)  // -> true

// All function objects have their own prototype set
console.log(User.hasOwnProperty("prototype")); // -> true
console.log(Function.hasOwnProperty("prototype")); // -> true
console.log(Object.hasOwnProperty("prototype")); // -> true
console.log(Array.hasOwnProperty("prototype")); // -> true



// All Function instances (User, Object, Array) have their own original copy of prototype object!
console.log(Function.prototype == User.prototype); // -> false (?)
console.log(Function.prototype == Object.prototype); // -> false (?)
console.log(Date.prototype == User.prototype); // -> false (?)

function Car(){
    this.brand = "Ferrari";
}

console.log(Car.prototype == User.prototype) // -> (?)


/*
    You can modify Function.prototype
    However you cannot modify the object that Function.prototype is a clone of
    That's why all Function instances (Object, Array ...) have their unique prototype object. They make their original copy
*/
