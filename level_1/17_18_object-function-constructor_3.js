/*
    When you write a function literal, actually you create an object
    But this object has its prototype property set to Function.prototype, which cannot be modified
    That's how Function objects become special. Function.prototype give specials abilities to Functions
*/

/* 
    When you call the constructor function with new Func(), 
    the engine will create a new object which inherits from Func.prototype 
    and then sets this inside the constructor function to refer to the new object.
*/

function User(firstName){
    this.firstName = firstName
}

var user1 = new User("Mustafa");

console.log(user1 instanceof User);

var superUser = {
    amISuper: true
}


User.prototype = superUser;
console.log(user1 instanceof User);

var user2 = new User("Kemal");
console.log(user2 instanceof User);

// So, assigning a new object to the prototype property of a function can be dangerous!
// Consider adding new properties to the existing prototype object!
