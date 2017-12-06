"use strict"

var foo = "bar";

function bar(){
    foo = "zar";
    var foo = "baz";
}

function baz(foo){
    foo = "bam";
    bam = "yay"; //
}

bar(); baz();

console.log(foo);