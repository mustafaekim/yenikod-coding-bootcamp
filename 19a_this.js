//"use strict"

function foo() {
	console.log( this.bar );
}

var bar = "global";

var obj1 = {
	bar: "obj1",
	foo: foo
};

var obj2 = {
	bar: "obj2"
};

// --------

foo();				// "global"
obj1.foo();			// "obj1"
foo.call( obj2 );		// "obj2"
new foo();			// undefined


/*
    1) foo() ends up setting this to the global object in non-strict mode so "global" is the value found for this.bar.
        -- in strict mode, this would be undefined and you'd get an error in accessing the bar property
    2) obj1.foo() sets this to the obj1 object.
    3) foo.call(obj2) sets this to the obj2 object.
    4) new foo() sets this to a brand new empty object.
*/