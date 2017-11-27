//immediately invoked function expression (IIFE):

(function IIFE(){
	console.log( "Hello!" );
})();
// "Hello!"


/* 
    Because an IIFE is just a function, and functions create variable scope, 
    using an IIFE in this fashion is often used to declare variables 
    that won't affect the surrounding code outside the IIFE
*/

var a = 42;

(function IIFE(){
	var a = 10;
	console.log( a );	// 10
})();

console.log( a );		// 42


// IIFEs can also have return values:
var x = (function IIFE(){
	return 42;
})();

x;	// 42