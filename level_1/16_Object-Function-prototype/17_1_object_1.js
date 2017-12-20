/*
    Object literal sythax
    Object constructor
    Function constructor
    Understanding function declarations & expressions

    __proto__ & prototype
*/

console.log("(1)", typeof Object); // -> "function"
console.log("(2)", typeof (new Object())); // -> "object"

/*
    RULE 0:
    Object is a function, when called by new operator (constructor call) 
        returns a new object whose __proto__ points to Object.prototype object
*/
var user = new Object();
console.log("(3)", user.__proto__ == Object.prototype);

// Object.prototype.__proto__ is null
console.log("(4)", Object.prototype.__proto__ == null);

/*
    We can generalize RULE 0 for ALL functions.
        RULE 1:
        All functions (including Object function, as we have seen above), 
            when called by new operator, returns an object 
                whose __proto__ property points to constructor function's prototype
*/

// Now let's dive into Function
console.log("(3)", typeof Function) // -> "function"
console.log("(4)", typeof (new Function()));  // we see clearly that new Function() returns a value of type function, not object

// Now you can think of all the functions written, constructed "new Function()"

function Y() { } // ~ var Y = new Function();
console.log("(5)", typeof Y); // -> "function"

/*
    Let's apply RULE 1 on function Function
*/
console.log("(6)", Y.__proto__ == Function.prototype); // true

/* So, Function is a function. A constructor call (new Functioo()) on Function returns a new "function object"
    whose __proto__ property points to Function.prototype
*/

/*
    We have seen that Object.prototype.__proto__ is null
    What's Function.prototype.__proto__ ?
*/
console.log("(7)", Function.prototype.__proto__ == Object.prototype); // -> true

// Now let's make a constructor call to function Y
var x = new Y();

// Let's apply RULE 1 on Y
console.log("(8)", x.__proto__ == Y.prototype); // -> true


console.log("(9)", Y.prototype.__proto__ == Object.prototype); // -> true

// Lastly, what does object literal does?
var user1 = { name: "Mustafa" }; // object literal constructs an object whose __proto__ property points to Object.prototype
console.log("(10)", user1.__proto__ == Object.prototype); // -> true

// So we can conclude that object literal does the same thing as new Object()