"use strict"

var foo = function bar(){
    var foo = "baz";

    function baz(foo){
        foo = bar;
        console.log(foo); // -> ?
    }

    baz();
    console.log(foo); // -> ?
}
foo();
//bar();