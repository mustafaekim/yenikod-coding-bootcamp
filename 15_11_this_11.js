"use strict"
// implicit binding
function hoo() {
	console.log( this.a );
}

var obj = {
	a: 2,
	foo: hoo
};

obj.foo(); // 2

//
var bar = {
	zar: obj.foo,
	a: 3
}
bar.zar();
