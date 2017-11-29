/*
    Falsy values:
    ""
    0, -0, NaN
    null, undefined
    false

    Everything else is truthy, including
    [], {}
*/

if(9) console.log("9 is truthy");
if(0.2) console.log("0.2 is truthy");
if(true) console.log("true is truthy");
if(" ") console.log("any string with length greater than 0 is truthy");
if([]) console.log("any array is truthy");
if({}) console.log("any object is truthy");

if(!0) console.log("0 is falsy");
if(!-0) console.log("-0 is falsy");
if(!NaN) console.log("NaN is falsy");
if(!"") console.log("empty string is falsy");
if(!false) console.log("false is falsy");
if(!undefined) console.log("undefined is falsy");
if(!null) console.log("null is falsy");