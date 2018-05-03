// objects are mutable
// objects (and hence arrays and functions) are passed as reference while assignment.
// assignment of object values do not copy the value but use a reference of the same object
// changing one object with mutate (change) the other object

var name = { firstName: "Mustafa" };
var another = name;
another.firstName = "Ahmet";
console.log(name.firstName);
