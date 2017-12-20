"use strict"

try{
    a = 5 // -> interpreter throws a ReferenceError!
    console.log("I am not executed!")
}
catch(e){
    console.log("(1) Error Name: ", e.name, "(2) Error Message:", e.message); // I select the property of the ReferenceError object
    console.log("Program continues");
}
console.log("and continues...");