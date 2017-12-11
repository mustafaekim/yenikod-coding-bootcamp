/*
    Module divides programs into clusters of code, that by some criteria belong together.
    You can start by putting everything where it is more convenient, later on you can modularize your code.

    Advantages of using modules:
        * Namespacing: prevent global scope pollution
        * Reuse: put pieces of functionality that stand on their own into seperate files
        * Decoupling: isolate pieces of code from each other
        
    To create a module that has its own scope, we should wrap our code into a IIFE
        This IIFE function will 
            either return a new object, having a closure on its private scope
            or attach a new object or properties into a global variable (conventionally, that object's name is "exports")

    Interpreting data as code is made possible with either eval or Function
    Function is better suited since it creates a new scope.
*/


// Do you remember?
var myFunction = new Function("x, y", "return x+y");
console.log("(1)", myFunction(1,4));


// Let's load a file as a string and put it into the Function's second parameter, which becomes the function's body.
var fs = require("fs");

const CODE_FILE_RELATIVE_PATH = "0_data-code_1.js";

var codeFileContent = fs.readFileSync(CODE_FILE_RELATIVE_PATH, "utf8");
var codeFileAsAFunction = new Function("", codeFileContent);
codeFileAsAFunction();

