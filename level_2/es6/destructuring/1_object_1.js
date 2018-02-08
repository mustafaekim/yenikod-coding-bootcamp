/*
    The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
        or properties from objects, into distinct variables.
*/

var a, b;
[a, b] = [3, 9];
console.log("(1)", a, b);


/* 
    The round braces ( ... ) around the assignment statement is required syntax 
    when using object literal destructuring assignment without a declaration.
*/

({ a, b } = { a: 10, b: 20 });
console.log("(2)", a, b)


var user = {
    name: "Mustafa"
    , age: 35
}

var { name } = user;
console.log("(3)", name)

var { name: firstName, age: old } = user;
console.log("(4)", `His name is ${firstName}, and he is ${old} years old`)
