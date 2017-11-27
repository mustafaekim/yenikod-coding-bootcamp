/*
var a = 10;

if(a<4){
	var b = 5;
}
console.log(b);
*/
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

one();		// 1
two();		// 2
console.log(c);
