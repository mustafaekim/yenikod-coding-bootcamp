// Functions are the only things that create a new scope.
// Function creates a new scope everytime it is called
// Everytime a function is called, local variables are re created
// The set of variables visible inside a function is determined 
//   by the place of that function in the program text. (lexical scoping)


var a = 100;
var b = 5;

function one() {
	// this `a` only belongs to the `one()` function
	var a = 1;
	var c = 6;
	console.log(a);
	console.log(b);
}

function two() {
	// this `a` only belongs to the `two()` function
	var a = 2;
	console.log(a);
}

one();
two();

