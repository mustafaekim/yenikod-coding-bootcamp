"use strict"

// Finally clause executes regardless of whether or not an exception is thrown
// Finally is the first that is executed after the try/catch block, in all cases

try{
    var a = 5;
}
finally{
    a = 0;
}
console.log(a);
