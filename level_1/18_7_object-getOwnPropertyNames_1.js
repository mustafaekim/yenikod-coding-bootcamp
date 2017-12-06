/*
    The Object.getOwnPropertyNames() 
        method returns an array of all properties (including non-enumerable properties except properties that using Symbol) found directly upon a given object.
*/

var me = {
    name: "Mustafa"
    , age: 35
    , car: ferrari
}
Object.defineProperty(me, "age", { writable: false, enumerable: false, configurable: false })

var ferrari = {
    model: 2001
}

var ahmet = Object.create(me);
ahmet.name = "Ahmet";
ahmet.price = Infinity;

/* -- */

console.log("(1)", Object.getOwnPropertyNames(ahmet));