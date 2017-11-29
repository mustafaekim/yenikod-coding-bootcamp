// a is declared to be a variable
// in javascript variables do not have types
// in javascript values have type
// 10 (which is a literal value of type number) is assigned to the variable a, throught assignment operator(=)
var a = 10;

var b = 15;

// if, is a statement/construct which takes a value or expression and coherce it into a value of type boolean   
// body of the if statement is executed if the boolean value is true.
if( a > b) {
   // console is a ( already ) declared variable which holds a value of type object
   // log is a property of console object 
   // the value of log property is of type function
   // log function expects a single parameter of type string otherwise the parameter value is coherced into string
   // we are calling the function with the () operator
    console.log( a + " is bigger than " + b  );
}
// if the value in the if condition is false the body of the else statement is executed
else {
    console.log(a + " is lower than " + b);
}
