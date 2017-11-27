console.log(typeof 1);

var a = "5"; // what is the type of the value that the variable a points to?
console.log(typeof a);



a = Number.parseInt(a); // explicit coercion
console.log(typeof a);

// variable does not have type but the value has
// javascript uses dynamic typing (not static typing)


console.log(typeof 5<6); //false
console.log(typeof 5==6); //false
console.log(typeof (5+6)); //true?