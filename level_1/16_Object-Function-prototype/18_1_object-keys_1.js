/*
    The Object.keys() 
        method returns an array of a given object's own enumerable properties, 
        in the same order as that provided by a for...in loop 
        (the difference being that a for-in loop enumerates properties in the prototype chain as well).
*/

var user = {
    name: "Mustafa"
    , age: 35
    , car: ferrari
}
Object.defineProperty(user, "age", { enumerable: false });

var ferrari = {
    model: 2001
    , fake: false
}
Object.defineProperty(ferrari, "fake", { enumerable: false });

var me = Object.create(user);
me.school = "Mkool";
me.address = "Kadikoy"
Object.defineProperty(me, "address", { enumerable: false });


console.log(Object.keys(me)); // -> ?