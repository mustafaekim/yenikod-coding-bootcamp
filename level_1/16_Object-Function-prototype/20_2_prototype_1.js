/*
    All objects have an internal property, whose value is another object (reference). We call it [[Prototype]]
    That [[Prototype]] object lexically defined in Object.prototype property
    That's how even an empty object is delegated some behaviours (through the prototype-linkage lookup mechanism)

    Object.prototype is a property having the property descriptor: {writable: false, enumerable: false, configurable: false}
    Object.prototype object has several properties:
        - constructor (which references the function that constructed the object) -> in this case, the Object function
        - __proto__ is null
        - hasOwnProperty()
        - isPrototypeOf()
        - propertyIsEnumerable()
        - toString()
        - valueOf()


    Nearly all objects in JavaScript are instances of Object
        Because they are either linked directly to Object.prototype, or linked to another object that is somehow linked to Object.prototype


    A typical object inherits properties (including methods) from Object.prototype
    However, an Object may be deliberately created for which this is not true (e.g. by Object.create(null))
        , or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).

    

*/

/*    
    1-) Definition: 
            When a function Y is called by the "new" operator (we name this call a "constructor call" -> new Y()), 
                new operator
                    - creates an empty object X
                    - assigns Y.prototype to X.__proto__ (because Y.prototype is an object, only a reference is assigned)
                        -> X.__proto__ = Y.prototype
                    - pass this newly created object X to function Y through the "this" identifier
                    - returns X, unless Y overwrites by a return statement.

    2-) 
        2.1) Object (with a capital O) is a function.
        2.2) Object.prototype is an object
        2.3) So when we make a constructor call to the Object function
            the Object function returns a new object, whose __prototype__ property is set to Object.prototype object (as a reference!)
        2.4) Object.prototype.__proto__ is set to null.

    3-)
        3.1) Function (with a capital O) is a function.
        3.2) new Function() returns an object (of type function) whose __proto__ is set to Function.prototype
        3.3) Function.prototype is what makes an object of type function so special. 

        3.4) Function.prototype.__proto__ references Object.prototype
        3.5) That's how objects created by "new Function()" actually have object behaviour (through delegation)
        
*/

//console.log(typeof Object, typeof Function);
// functions are special objects whose prototype is set to Function.prototype


function me(){}
console.log(me.__proto__ == Function.prototype)

var a = new Function();
var b = new Function();
console.log(a.__proto__ === Function.prototype); // -> true
console.log(b.__proto__ === Function.prototype); // -> true
console.log(a.__proto__ === b.__proto__); // -> true
console.log(new Function().__proto__ === Function.prototype)

console.log("------------")

console.log(new Function().__proto__ === Function.prototype)

console.log(new Function().prototype === new Function().prototype);
console.log(new Object().prototype === new Object().prototype);
console.log(new Array().prototype === new Array().prototype);


console.log(Function.prototype.__proto__ == Object.prototype);



var user = {
    name: "Mustafa"
};
console.log(Object.getPrototypeOf(user));
console.log(Object.getPrototypeOf(user) === Object.prototype)
console.log(Object.getPrototypeOf(user).__proto__);
console.log(Object.prototype.__proto__)


