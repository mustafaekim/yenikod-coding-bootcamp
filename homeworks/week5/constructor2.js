function User(name) {
    this.name = name;
}

User.prototype.getMyName = function () {
    return this.name;
}

User.prototype.lengthOfMyName = function () {
    return this.name.length;
}

User.prototype.setMyName = function (newName) {
    this.name = newName;
}

User.prototype.greet = function () {
    console.log("Hello, this is " + this.name);
}

var user = new User("Mustafa");

console.log(user.getMyName()) // -> Mustafa
console.log(user.lengthOfMyName()) // -> 7
user.setMyName("Arda")
console.log(user.getMyName()) // -> Arda
console.log(user.lengthOfMyName()) // -> 4
user.greet() // -> Hello, this is Arda

var user2 = new User("Orhan");
user2.greet() // -> Hello, this is Orhan

/*
    DO SOMETHING HERE
    SO THAT THE CODE BELOW WORKS AS EXPECTED
*/

user2.greet = function(){
    console.log(`Hi, my name is ${this.name}`);
}



user.greet() // -> Hello, this is Arda
user2.greet() // -> Hi, my name is Orhan!
user.greet();