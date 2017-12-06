/*
    Object.prototype is an object having properties

        Object.prototype.constructor
            Specifies the function that creates an object's prototype.

        Object.prototype.hasOwnProperty() 
            (not chain lookup)
            Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.

        Object.prototype.isPrototypeOf() 
            (chain lookup)
            Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.

        Object.prototype.propertyIsEnumerable()
            Returns a boolean indicating if the internal enumerable attribute is set.

        Object.prototype.valueOf()
            Returns the primitive value of the specified object


    Object.create creates a new object whose prototype is the object given as parameter
*/

console.log("(1)", typeof Object.prototype, "--> Object.prototype is an object");
console.log("(2)", Object.prototype.__proto__, "--> Object.prototpe is an object whose __proto__ is null"); // Object.prototype is the root object in the prototype chain


// When you create an object with either literal or Object constructor (new) your object is automatically linked to Object.prototype object through __proto__ property
var user = { firstName: "Mustafa", lastName: "Ekim"}
console.log("(3)", user.__proto__ == Object.prototype);

// Object.create
// Now we create another object and set it's prototype (__proto__ property) to user object. We have a prototype chain!
var car = Object.create(user);
console.log("(4)", car.firstName);


/*
    If an object has Object.prototype object in its prototype chain, it automatically have it's methods:
        Object.prototype.hasOwnProperty()
        Object.prototype.isPrototypeOf() 
        Object.prototype.propertyIsEnumerable()
*/

console.log("(5)", user.hasOwnProperty("firstName"), "--> firstName is direct property of user");
console.log("(6)", user.propertyIsEnumerable("firstName"), " --> firstName is enumerable (by default)");

console.log("(7)", car.hasOwnProperty("firstName"), "--> firstName is not direct property of car");
console.log("(8)", car.propertyIsEnumerable("firstName"), "--> firstName is not direct property of car, hence returs false");

console.log("(9)", user.isPrototypeOf(car), "--> user is in the prototype chain of car");

var park = Object.create(car);
console.log("(10)", user.isPrototypeOf(park), "--> user is in the prototype chain of park");
console.log("(11)", car.isPrototypeOf(park), "--> car is in the prototype chain of park");

// the reverse is not true
console.log("(11)", park.isPrototypeOf(user), "--> park is NOT in the prototype chain of user");
console.log("(12)", car.isPrototypeOf(user), "--> car is NOT in the prototype chain of user");




