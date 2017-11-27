var a = "Mustafa";
var b = 10;
console.log(typeof b);

var c = a + b; // implicit coercion because of + operator (one is string hence..)
console.log(typeof c);

console.log(typeof String(b)); //explicit coercion

// best practice is using explicit coercion
var d = a + String(b);
