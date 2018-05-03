// function is a type of value
// we declare a function whose name is "add"
// we can reach this declared function by it's name because that's a function declaration
// Behind the scene a "var add" is created and assigned to this function value

// all variables return the value they are assigned
// a value of type function can be called by () operator
// when a function is called, the function returns the expression of the return statement in the function body
function add(a, b) {
    return a+b;
}


// add is a variable
// variables return the value they hold
// the value inside add is a value of type function
// hence, below, we write the value inside add, which is a value of type function
// That's how the function value is presented in the console:  [Function: add]
console.log(add);


// below, we call this function, passing 2 parameters. 
// First parameter is a value of type number (3)
// Second parameter is a value of type number (5)
// When a function is called, it returns the "return statement" if any, if not, it returns undefined
console.log(add(3, 5));
