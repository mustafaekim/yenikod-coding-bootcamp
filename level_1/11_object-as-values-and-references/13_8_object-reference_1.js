// numbers, strings and boolean are immutable
// it's imposible to change an immutable value
// If you have variable (a) that holds a value of type string, only a re-assignment of a will change the value that it holds. 
// Assignment of no other variable can change it
// Assignment makes a copy of the value

var name = "Mustafa";
var firstName = name;

name = "Ahmet";
console.log(firstName);