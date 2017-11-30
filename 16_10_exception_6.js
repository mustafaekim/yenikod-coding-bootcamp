// Finally clause executes regardless of whether or not an exception is thrown

"use strict"

try{
    a = 2;
}
catch(e){
    console.log(e.name, e.message);
    var b = 1;
}
finally{
    var a = 0;
}
console.log(a, b);

// What's the result?