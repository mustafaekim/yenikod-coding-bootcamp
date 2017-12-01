"use strict"

var user = {
    firstName: "Mustafa"
}

var car = Object.create(user);
console.log("(1)", "Object.create(user) --> Who constructed me? -->", car.constructor);

function Plane() {
    this.brand = "Boing";
}
var myPlane = new Plane();
console.log("(2)", myPlane.hasOwnProperty("brand"));
console.log("(3)", "new Plane() --> Who constructed me? -->", myPlane.constructor);

/*
    Every JavaScript function has a prototype property 
    If an object is created from a constructor function such as new Object (), new Fruit () or new Array () or new Anything (), it inherits from that constructor 
    The object that constructor call returns, has an empty object assigned into __proto__ property
    An empty object ({}) is an object having no OwnProperty but having it's __proto__ property set to Object.prototype
*/

console.log("(4)", myPlane.__proto__, "--> constructor call returns an object having its __proto__ property assigned an empty object");
console.log("(5)", myPlane.__proto__.__proto__ == Object.prototype); // An empty object's __proto__ is Object.prototype

// Let's change the prototype mechanism of the function Plane.
// Plane.prototype is the object that the function sets the __proto__ property when it is passed a new object through new operator
Plane.prototype = Object.create(null);
var mySecondPlane = new Plane();
console.log("(6)", mySecondPlane.__proto__ == null); // mySecondPlane object have it's __proto__ property set to Object.create(null) (An empty object having it's prototype assigned to null)

try { console.log("(7)", mySecondPlane.hasOwnProperty("brand")); }
catch(ex) { console.log("(8)", "Because Plane.prototype is null, the object it newly creates has it's __proto__ set to null, hence cannot access Object.prototype properties")}