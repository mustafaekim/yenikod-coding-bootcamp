// Object.assign function shallow copy an object
// Shallow copy, iterates enumerable owned keys and copy via assignment (hence objects are passed as reference)
// Object.prototype.hasOwnProperty()

"use strict"

var ferrari = {
    model: 2005
}

var user = {
    firstName: "Mustafa",
    lastName: "Ekim",
    age: 35,
    car: ferrari
}

var shallowCopyUser = Object.assign({}, user);

console.log(
    "(1)"
    ,shallowCopyUser.car == user.car
    , shallowCopyUser.firstName == user.firstName
);

shallowCopyUser.car.price = 100;
console.log(
    "(2)"
    , shallowCopyUser.car.price == user.car.price
);

console.log(
    "(3)"
    , user.hasOwnProperty("ferrari")
    , user.hasOwnProperty("model")
    , Object.hasOwnProperty.call(user, "age") // Had I already said that all objects have hasOwnProperty function?
);



