var foo = function () {
	console.log("foo");
	return "50";
};

var x = function bar() {
	console.log("bar");
};

//bar(); // ReferenceError
console.log(x);
console.log(x.name)
console.log(foo);






