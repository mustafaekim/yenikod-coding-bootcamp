/*
    Object.preventExtensions: prevent an object from having new properties added
    Object.seal: Object.preventExtensions + set all properties not configurable (hence properties cannot be deleted or reconfigured)
    Object.freeze: Object.seal + set all properties as writable:false

    Notes:
        1- Referenced objects are not affected
        2- Object.freeze is the highest level of immutability you can attain for an object
*/

"use strict"

var user = {
    firstName: "Mustafa",
    lastName: "Ekim"
}

Object.preventExtensions(user);
try { user.age = 35 }
catch (e) { console.log("(1)", "Cannot add new property to user", " => preventExtensions") }

Object.seal(user);
try { delete user.firstName }
catch (e) { console.log("(2)", "Cannot delete/reconfigure any property", "=> seal") }

Object.freeze(user)
try { user.firstName = "Musti" }
catch (e) { console.log("(3)", "Cannot change values of any property", " => freeze") }