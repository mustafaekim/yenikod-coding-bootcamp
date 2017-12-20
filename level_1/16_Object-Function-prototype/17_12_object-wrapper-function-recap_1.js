// Re-cap primitive wrapper function/object


// Boolean, String and Number functions return primitive values
console.log("(1)", Number(10) == Number(10)); 
console.log("(2)", Number(10) === Number(10)); 
console.log("(3)", Number(10) == 10); 
console.log("(4)", Number(10) === 10); 

console.log("(5)", Number(10) instanceof Number);
console.log("(6)", typeof Number(10));

// new Boolean, new String and new Number returns objects (wrapper objects for primitive values)
var ten = new Number(10);
console.log("(7)", typeof ten);
console.log("(8)", ten instanceof Number);

console.log("(9)", ten == 10); // coherence
console.log("(10)", ten === 10); // coherence not allowed
console.log("(11)", new Number(10) === 10); // coherence not allowed
