/*
    Converting a value from one type to another is often called coercion (aka. type casting, type conversion)
    “explicit coercion” is when it is obvious from looking at the code that a type conversion is intentionally occurring
    “implicit coercion” is when the type conversion will occur as a less obvious side effect
*/

var x = 10;
var y = 5;
var z = x + y; // there is no coercion because both of the operands are values of type number
console.log(z);


var ageText = "My age is: "; // ageText is a variable that holds a value of type string
var myAge = 35; // myAge is a variable that holds a value of type number
console.log(typeof ageText);
console.log(typeof myAge);


var sayMyAge = ageText + myAge; // implicit coercion occurs because ageText holds a value of type string and 35 is a value of type number
console.log(sayMyAge); 
console.log(typeof sayMyAge);
console.log(typeof myAge);

/*
    the + operator combined with one of the operands being a string value ("My age is: ") 
    will insist on the operation being a string concatenation (adding two strings together), 
    which as a (hidden) side effect will force the 35 value (of type number) in a to be coerced to its string equivalent: "35".
*/


var sayMyAge = ageText + String(myAge);
console.log(sayMyAge);
console.log(typeof sayMyAge);
/*
    in the code above, by using String(), we explicitely change the type of the value 35 to "35".
    hence a value of type number (35) becomes a value of type string ("35")
    In this example, unlike the implicit coercion, the String(..) function makes it pretty obvious that 
    it’s explicitly taking the value in a and coercing it to a string representation.
*/


/*
    Exercises: 
*/
console.log(typeof String(35)) // ?

var greeting = "Hello, I have " + 3 + " cars!"; // Is there an implicit coercion?
console.log(typeof greeting); 

console.log("I am " + 35 + "years old"); // Is there an implicit coercion?
console.log("Last year, I was " + String(35)); // Is there an implicit coercion?
