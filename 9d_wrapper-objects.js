/*
    •	Except undefined and null, all values are wrapped with the associated 
        (depending on the type of the value) object when a property accessor 
        operator (dot operator or bracket operator) is called on the value. 
    o	string value is wrapped by String object
    o	number value (first must be placed inside parenthesis) is wrapped by Number object
    o	boolean value is wrapped by Boolean object
    o	function value (first must be placed inside parenthesis) is wrapped by Function object
    o	Once the value is wrapped by an object, as a result, it can have properties. (and have acccess to the built-in properties)
*/

console.log("Mustafa".length);
console.log(String("Mustafa").length);

console.log((1000).toString());
console.log(Number(1000).toString());

console.log(true.toString());
console.log(Boolean(true).toString());

// console.log(
//     (function add(x, y) {
//         return x + y;
//     }).toString()
// );
// console.log(
//     Function("x", "y", "return x + y;")
//     .toString()
// );



// String built-in properties

// constructor	Returns the string's constructor function
// length	Returns the length of a string
// prototype	Allows you to add properties and methods to an object
// charAt()	Returns the character at the specified index (position)
// charCodeAt()	Returns the Unicode of the character at the specified index
// concat()	Joins two or more strings, and returns a new joined strings
// endsWith()	Checks whether a string ends with specified string/characters
// fromCharCode()	Converts Unicode values to characters
// includes()	Checks whether a string contains the specified string/characters
// indexOf()	Returns the position of the first found occurrence of a specified value in a string
// lastIndexOf()	Returns the position of the last found occurrence of a specified value in a string
// localeCompare()	Compares two strings in the current locale
// match()	Searches a string for a match against a regular expression, and returns the matches
// repeat()	Returns a new string with a specified number of copies of an existing string
// replace()	Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
// search()	Searches a string for a specified value, or regular expression, and returns the position of the match
// slice()	Extracts a part of a string and returns a new string
// split()	Splits a string into an array of substrings
// startsWith()	Checks whether a string begins with specified characters
// substr()	Extracts the characters from a string, beginning at a specified start position, and through the specified number of character
// substring()	Extracts the characters from a string, between two specified indices
// toLocaleLowerCase()	Converts a string to lowercase letters, according to the host's locale
// toLocaleUpperCase()	Converts a string to uppercase letters, according to the host's locale
// toLowerCase()	Converts a string to lowercase letters
// toString()	Returns the value of a String object
// toUpperCase()	Converts a string to uppercase letters
// trim()	Removes whitespace from both ends of a string
// valueOf()	Returns the primitive value of a String object


// Number built-in properties
// constructor() Returns the function that created this object's instance. By default this is the Number object.
// toExponential() Forces a number to display in exponential notation, even if the number is in the range in which JavaScript normally uses standard notation.
// toFixed() Formats a number with a specific number of digits to the right of the decimal.
// toLocaleString() Returns a string value version of the current number in a format that may vary according to a browser's locale settings.
// toPrecision() Defines how many total digits (including digits to the left and right of the decimal) to display of a number.
// toString() Returns the string representation of the number's value.
// valueOf() Returns the number's value.

// Boolean built-in properties
// toSource() Returns a string containing the source of the Boolean object; you can use this string to create an equivalent object.
// toString() Returns a string of either "true" or "false" depending upon the value of the object.
// valueOf() Returns the primitive value of the Boolean object.


// Array built-in properties
// concat() Returns a new array comprised of this array joined with other array(s) and/or value(s).
// every() Returns true if every element in this array satisfies the provided testing function.
// filter() Creates a new array with all of the elements of this array for which the provided filtering function returns true.
// forEach() Calls a function for each element in the array.
// indexOf() Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
// join() Joins all elements of an array into a string.
// lastIndexOf() Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
// map() Creates a new array with the results of calling a provided function on every element in this array.
// pop() Removes the last element from an array and returns that element.
// push() Adds one or more elements to the end of an array and returns the new length of the array.
// reduce() Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.
// reduceRight() Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.
// reverse() Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.
// shift() Removes the first element from an array and returns that element.
// slice() Extracts a section of an array and returns a new array.
// some() Returns true if at least one element in this array satisfies the provided testing function.
// toSource() Represents the source code of an object
// sort() Sorts the elements of an array.
// splice() Adds and/or removes elements from an array.
// toString() Returns a string representing the array and its elements.
// unshift() Adds one or more elements to the front of an array and returns the new length of the array.