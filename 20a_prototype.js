/*
    The a property doesn't actually exist on the bar object, 
    but because bar is prototype-linked to foo, 
    JavaScript automatically falls back to looking for a on the foo object, where it's found.
*/


var foo = {
	a: 42
};

// create `bar` and link it to `foo`
var bar = Object.create( foo );

bar.b = "hello world";

bar.b;		// "hello world"
bar.a;		// 42 <-- delegated to `foo`