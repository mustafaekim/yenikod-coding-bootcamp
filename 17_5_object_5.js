/* 
    Property descriptor
        - value
        - writable: controls the ability to change the value
        - enumerable: controls whether the property will show up in object-property enumerations (i.e: for..in)
        - configurable: controls the ability to 
            - modify the property-descriptor (setting it to false is 1-way operation)
            - if false, delete is not allowed
            - does not affect the ability to change value

    * Object.getOwnPropertyDescriptor
    * Object.defineProperty


    Notes:
        if {configurable: false, writable: true} you can still set writable to false (but no way-back)
        making {configurable: false, writable: false} you create a constant property: cannot be changed, redefined or deleted
        unless writable is false, property value can always be updated
*/

"use strict"

var user = {
    firstName: "Mustafa",
    lastName: "Ekim",
    age: 35
}

console.log("(1)", Object.getOwnPropertyDescriptor(user, "lastName"));
/* ->
    {   
        value: 'Ekim',
        writable: true,
        enumerable: true,
        configurable: true 
    }
*/

// defineProperty either adds or (if configurable) modifies the property
Object.defineProperty(user, "school", {
    value: "Mkool",
    writable: true,
    enumerable: true,
    configurable: true
});
console.log("(2)", user);

// let's make school not enumerable and not writable
Object.defineProperty(user, "school", { writable: false, enumerable: false });
for (var key in user) { console.log("(3)", key, user[key]); }

// Can I change the value of school property?
try { user.school = "Bogazici University"; }
catch (ex) { console.log("(4)", "Property 'school' is not writable"); }

// let's make school and firstName not configurable
Object.defineProperty(user, "school", { configurable: false });
Object.defineProperty(user, "firstName", { configurable: false });

// Can I still configure school property?
try { Object.defineProperty(user, "school", { writable: true }) }
catch (ex) { console.log("(5)", "Property 'school's property definitions cannot be modified"); }

// Can I still update value of firstName?
user.firstName = "Musti";
console.log("(6)", user.firstName);






