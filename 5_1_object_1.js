// object: 
//     compound value
//     properties: key -> value (any propery expression)

// accessing object properties:        
//     person.name (dot notation)
//     person["name"] (bracket notation)

//     person.age
//     person["age"]

//     dot notation:
//         requires a valid identifier (varible names)

//     bracket notation: 
//         any expression is ok
//         you can pass a variable

var person = {
    counter: 0,
    name: "Mustafa",
    age: 35
}

console.log(person.name);
console.log(typeof person.name);
console.log(typeof person["name"])

console.log(person.age);
console.log(typeof person.age);

var old = "age";
console.log(person[old]);
console.log(person["a" + "g" + "e"]);
