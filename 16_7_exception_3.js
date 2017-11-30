"use strict"

try{
    a = 5 // -> interpreter throws a ReferenceError!
    console.log("I am not executed!")
}
catch(e){
    console.log(e);
    console.log("Program continues");
}
console.log("and continues...");