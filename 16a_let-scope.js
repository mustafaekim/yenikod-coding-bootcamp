{ // block scope
	let c = 10;
	var d = 15;
}
console.log(d);
//console.log(c);

/*
var a = 10;
if(a<100){
	let b = 5;
	a = a+b;
}
console.log(b);
*/


/*
function foo() {
	var a = 1;

	if (a >= 1) {
		let b = 2;

		while (b < 5) {
			let c = b * 2;
			b++;

			console.log( a + c );
		}
	}
}

foo();
// 5 7 9
*/