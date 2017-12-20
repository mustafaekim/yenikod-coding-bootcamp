/*
    Tagged template literals (short: tagged templates): are function calls whose parameters are provided via template literals.

    Putting a template literal after an expression triggers a function call, 
        similar to how a parameter list (comma-separated values in parentheses) triggers a function call.


    Both are equal:
        tagFunction`Hello ${firstName} ${lastName}!`
        tagFunction(['Hello ', ' ', '!'], firstName, lastName)

        so a tag function takes 
            an array of string as a 1st parameter
            and other parameters which are evaluated to be placed between the array elements
*/

function myTag(arr, ...args) {
    arr.forEach(a => console.log(a));
    args.forEach(arg => console.log(arg));
}

var name = "Mustafa", age = 35;
myTag`Hello, my name is ${name} and I am ${age} years old.`;