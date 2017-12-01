// for in loop iterates over the object's property keys

var person = { firstName: "Mustafa", lastName: "Ekim", age: 35 };

for (var anyKey in person){
    console.log(person[anyKey]);
}