// String, Number and Boolean functions return primitive values, not objects!
// Hence equality is true

console.log(typeof "Mustafa")
console.log(typeof String("Mustafa"));
console.log(typeof Number(100))

console.log(String("Mustafa") == String("Mustafa"));
console.log(Number(100) == Number(100));
console.log(Boolean(true) == Boolean(true));

console.log(new Object() == new Object());


console.log(typeof new String("Mustafa"))


