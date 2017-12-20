var person = {
    name: "Mustafa"
}

var myName = person.name;
var mySelf = person;

person.name = "Ahmet";
console.log(myName);
console.log(mySelf);