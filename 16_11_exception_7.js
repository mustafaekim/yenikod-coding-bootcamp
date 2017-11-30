"use strict"

try{
    a = 0;
}
catch(e){
    throw new TypeError("I am stupid");
}
finally{
    console.log("Oh, finally");
}
