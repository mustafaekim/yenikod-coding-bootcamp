// The typeof operator is followed by its operand
// typeof operator only returns the type of the value given as operand

console.log(typeof 1); // prints number
console.log(typeof 3.4); //prints number
console.log(typeof 100); //prints number
console.log(typeof "Mustafa"); //prints string
console.log(typeof true); //prints boolean
console.log(typeof false); //prints boolean

console.log(typeof undefined); //prints undefined
console.log(typeof null); //prints null


// When the operand is a variable, typeof operator returns the type of value that the variable holds, not the type of the variable.
// In JavaScript, variables have not type

var a = "5"; // what is the type of the value that the variable holds?
console.log(typeof a);



a = Number.parseInt(a); // explicit coercion
console.log(typeof a);

// variable does not have type but the value has
// javascript uses dynamic typing (not static typing)


console.log(typeof 5<6); //false
console.log(typeof 5==6); //false
console.log(typeof (5+6)); //true?