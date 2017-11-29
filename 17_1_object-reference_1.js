// numbers, strings and boolean are immutable
// it's imposible to change an immutable value
// If you have variable (a) that holds a value of type string, only a re-assignment of a will change the value that it holds. 
// Assignment of no other variable can change it
// Assignment makes a copy of the value

/*
var name = "Mustafa";
var firstName = name;

name = "Ahmet";
console.log(firstName);
*/


// and ..
/*
var name = "Mustafa";
var firstName = name;
firstname = "Ahmet";
console.log(name);
*/



// objects are mutable
// objects (and hence arrays and functions) are passed as reference while assignment.
// assignment of object values do not copy the value but use a reference of the same object
// changing one object with mutate (change) the other object
/*
var name = { firstName: "Mustafa"};
var another = name;
another.firstName = "Ahmet";
console.log(name.firstName);
*/



// and ..
/*
var name = {firstName: "Mustafa"};
var another = name;
name.firstName = "Ahmet";
console.log(another.firstName);
*/


/*
var person = {
    name: "Mustafa"
}

var myName = person.name;
var mySelf = person;

person.name = "Ahmet";
console.log(myName);
console.log(mySelf);
*/



// same example with array
/*
var colors = ["black", "white"];
var myFavoriteColor = colors[0];
var myFavoriteColors = colors;
colors[0] = "red";
console.log(myFavoriteColor);
console.log(myFavoriteColors);
*/



/*
var car = { name: "Volvo"}

var person = {
    favoriteCar: car.name
}

console.log(person.favoriteCar);

car.name = "Renault"
console.log(person.favoriteCar);
*/


// objects are passed as reference
/*
var car = { name: "Volvo"}

var person = {
    favoriteCar: car
}

console.log(person.favoriteCar);
car.name = "Renault"
console.log(person.favoriteCar);
*/



// When comparing objects, == operator returns true if both objects are the same object
// Comparing different objects will return false even if they have identical contents
/*
var mustafa = { name: "Mustafa" }
var mySelf = { name: "Mustafa" }
var another = mustafa;
console.log(mustafa == mySelf);
console.log(another == mustafa); // the variables point to the same object
*/



// When comparing primitive values (string, boolean, number), the actual contents are compared
/*
var aCar = "Renault";
var anotherCar = "Renault";
console.log(aCar == anotherCar);
console.log(aCar == "Renault");
*/


console.log(1 == "1");
console.log(1 === "1")


var me = "Mustafa" + 35;
console.log(typeof me);
console.log("Mustafa"+35);



console.log("Mustafa" + "Ekim" + 35 === "MustafaEkim35")



