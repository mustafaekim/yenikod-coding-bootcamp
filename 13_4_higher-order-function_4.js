/*
    Array properties:
        - forEach(fn)
        - every(fn)
        - some(fn)
*/

"use strict"

var numbers = [1, 2, 3, 4];

numbers.forEach(function (value) {
    console.log("(1)", value * 2);
})


// every breaks when falsy
// returns true if the callback function returns a truthy value for every array element; otherwise, false.
numbers.every(
    function (value) {
        console.log("(2)", value * 2);
        return value < 3;
    }
);

// return value
function isBelowThreshold(currentValue) {
    return currentValue < 40;
}
var array1 = [1, 30, 39, 29, 10, 13];
console.log("(3)", array1.every(isBelowThreshold));


// some breaks when truthy
numbers.some(
    function (value) {
        console.log("(4)", value * 2);
        return value > 2;
    }
);