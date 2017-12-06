"use strict"

try{
    a = 0;
}
catch(e){
    throw new TypeError("I am stupid");
    console.log("catch is over")
}
finally{
    console.log("Oh, finally");
}
