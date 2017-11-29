/* 
    Because an IIFE is just a function, and functions create variable scope, 
    using an IIFE in this fashion is often used to declare variables 
    that won't affect the surrounding code outside the IIFE
*/


var a = 42;

(function IIFE() {
    var a = 10;
    console.log(a);
})();

console.log(a);
