/* 
    Make the code below work by using 
        First: Constructor pattern
        Second: Constructor pattern with prototype

    If you can arrive to complete these tasks, write TESTS (mocha) to prove that your solution works
*/
function User(name) {

    this.name = name;

    this.getMyName = function () {
        return console.log(this.name);
    }
    this.lengthOfMyName= function () {
        return console.log(this.name.length);
    }
  
    this.setMyName = function (newName) {
        this.newName= newName
        return this.name = this.newName
    }
    this.greet = function () {
        return console.log("Hello, this is " + this.name);
    }
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

user.greet() // -> Hello, this is Arda
user2.greet() // -> Hi, my name is Orhan!