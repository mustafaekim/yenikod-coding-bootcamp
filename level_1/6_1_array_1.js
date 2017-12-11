/* 
    array is a subtype of object
    so is an object
    typeof returns object
*/


var a = ["blue", "black", "white"];

console.log(a[1]);
console.log(typeof a[1]);
console.log(typeof a);

console.log(a.length);
console.log(a[0].length);


var a = ["blue", "black", "white"];

for(var i=0; i<a.length; i++) {
	console.log("hop");
}

// length property of an array returns number of elements inside the array
console.log(a.length) // -> 3


// Arrays are objects, hence can be added properties (not recommended)
a.firstName = "Mustafa";

// length property returns number of elements, not properties! Elements have number indexes
console.log(a.length); // -> 3

a["4"] = "purple"; // "4" is coerced into number value 4
console.log(a.length); // -> 5!
console.log(a[3]) // -> undefined