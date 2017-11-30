// primitive values wrapping Object's compare their values, unlike other objects

console.log(String("Mustafa") == String("Mustafa"));
console.log(Number(100) == Number(100));
console.log(Boolean(true) == Boolean(true));

console.log(new Object() == new Object());