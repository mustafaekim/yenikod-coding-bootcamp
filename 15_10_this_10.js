"use strict"

function foo() {
	console.log( this.a );
}

var a = 2;

foo(); // type error