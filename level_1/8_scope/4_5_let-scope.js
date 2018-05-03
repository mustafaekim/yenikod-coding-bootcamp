// let and const are hoisted but not initialized
// you can think of as if they do not hoist
// We observe that they are hoisted because it throws TDZ error

"use strict";

{
    console.log(a);

    let a=10;
}