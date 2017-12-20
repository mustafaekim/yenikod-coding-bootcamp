var a = 2;
foo();

function foo() {
	a = 3;
	console.log( a );
	var a;
}

console.log( a );