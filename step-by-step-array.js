// we declare a variable of name a
// we assign a value of type array into the variable a
// The right hand side of the assigment operator is an array literal
// The array has 5 elements
// Because array is an object, it has built-in properties
// One of the properties it always have is length
// When we say a.length, we get the value of the length property in the array object

var a = [
    "ahmet",
    15,
    undefined,
    true,
    function b(name, lastname) {
        return name + " " + lastname;
    }
]

// [] is an operator that returns the n'th element in the array
// below, a[4] returns the 4th element of the array inside variable a
// this returned value is a function
var b = a[4];

console.log(b);
console.log(b("ozan", "meray"));
console.log(a.length);

// We cretae a loop that iterates a.length times (hence 5 times)
// In each iteration we reach a different element of the array and we write the element's value into the console
for (var c = 0; c < a.length; c++) {
    console.log(a[c]);
}