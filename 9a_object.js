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

/*
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
*/


// for in loop iterates over the object's property keys
/*
var person = { firstName: "Mustafa", lastName: "Ekim", age: 35 };
for (var anyKey in person){
    console.log(person[anyKey]);
}
*/


// when the value of a propery is a function, it is called a method
// this keyword inside a method refers to the object
/*
var person = {
    counter: 0,
    increment: function () {
        this.counter++;
        return this.counter;
    }
}

console.log(typeof person.increment);
var c = person.increment();
console.log(c);
console.log(person.counter);
*/