// IIFEs can have return values

var x = (function IIFE(){
	return 42;
})();

console.log(x);