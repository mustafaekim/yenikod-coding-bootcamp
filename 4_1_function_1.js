// functions => reusability
// a named section of code that can be called again and again
// each time the function is called, the code inside the function runs
// function can optionally take arguments/parameters
// function can optionally return value

// functions have their own scope => lexical scope

function hi() {
    console.log("Hello World");
}

function greet(name) {
    console.log("Hello " + name);
}

function getHi() {
    return "Hello World!";
}

function getGreeting(name) {
    return "Hello " + name;
}

console.log(typeof hi);

// hi();
// greet("Mustafa");

// console.log(getHi());
// console.log(getGreeting("Mustafa"));

// functions that does not have a return statement, returns undefined by default
// console.log(hi());