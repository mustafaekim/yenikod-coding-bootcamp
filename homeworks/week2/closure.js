// 0. Write a function that retuns "Hello World!" 
// i.e., Q0() returns "Hello World"

var Q0 = function () {
    return "Hello World!";
};

// 1. Write a function that returns number 7.

/* TODO */

function seven() {
    return 7;
}


// 2. Write a function that returns the same number that takes as a parameter
// i.e., Q2(7) returns 7.

/* TODO */

function clone(i) {
    return i;
}

// 3. Write a function that returns the a function that returns 7.
// i.e., Q3()() returns 7

/* TODO */

function returner() {
    return function a() {
        return 7;
    };
};

// 4. Write a function that returns the a function that returns the number that
// was passed to the first function. i.e., Q3(7)() === 7.

/* TODO */
function valueAssign(a) {
    return function returner() {
        return a;
    };
};
//console.log(valueAssign(7)());

// 5. Write a function that returns a function that returns a one more than the
// number that was passed in to the first function, i.e., Q5(7)() === 8.

/* TODO */

function valueAssign(a) {
    return function returner1() {
        return ++a;
    };
};
//console.log(valueAssign(10)()); // 11


// 5. Write a function that returns a function that returns a one more than the
// number that was passed in to the first function, but increases by one each 
// time it is called, i.e.,
// var fn = Q5(7);
// fn() //returns 8.
// fn() //returns 9.

/* TODO */


function Q5(a) {
    var times = 0;
    return function returner() {
        times++;
        return a + times;
    };
};
var fn = Q5(7);
//console.log(fn()); // 8
//console.log(fn()); // 9

// 6. Write a function that returns a function that returns one more than the
// number it returned last time, starting with 1. i.e., 

// var fn = Q5();
// fn() //returns 1.
// fn() //returns 2.
// fn() //returns 3.

var a = function valueAssign() {
    var times = 0;
    return function returner() {
        times++;
        return times;
    };
};

var fn = a();
console.log(fn());
console.log(fn());
//console.log(a()());
//console.log(a()());

/* TODO */

// 6. Write a function that returns a new number each time it is called, i.e., 
// var fn = Q6; 
// fn() //returns 1.
// fn() //returns 2.
// fn() //returns 3.
// HINT: IIFE

/* TODO */
