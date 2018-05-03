"use strict"

var foo = function zoo(){
    zoo = 1 // function name cannot be overwridden
    return zoo; // I stil return myself
}

foo = foo();
console.log(foo);