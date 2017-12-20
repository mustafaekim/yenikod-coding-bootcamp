/*
    If a function uses this keyword, we call this function: this-aware function
    this depends only how the function is called (nothing about where the function resides lexically)
    Arrow functions don't have this, hence they ask you their outerscope
*/

/* 
    To understand this binding, we have to understand the call-site: the location in code where a function is called
    (not where it's declared). We must inspect the call-site to answer the question: what's this this a reference to?
*/

/*
Determining this, order of precedence.

New: Is the function called with new (new binding)? If so, this is the newly constructed object.
var bar = new foo()

Explicit Binding: (call, apply, hard binding) Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.
var bar = foo.call( obj2 )


Implicit Binding: Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.
var bar = obj1.foo()

Implicitly Lost & Default Binding: Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.
var bar = foo()
*/


"use strict"

function foo() {
    console.log(this ? this.bar : "this is undefined");
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
foo.call(obj2);		// "obj2"
new foo();			// undefined

foo.call(undefined);


/*
    1) foo() ends up setting this to the global object in non-strict mode so "global" is the value found for this.bar.
        -- in strict mode, this would be undefined and you'd get an error in accessing the bar property
    2) obj1.foo() sets this to the obj1 object.
    3) foo.call(obj2) sets this to the obj2 object.
    4) new foo() sets this to a brand new empty object.
*/