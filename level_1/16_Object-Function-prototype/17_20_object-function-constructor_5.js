function User(firstName) {
    User.callCounter = User.callCounter ? User.callCounter++ : 1;

    // Dont forget that User.prototype is reset everytime the function is called!
    // User.prototype always refer to the SAME property! 
    // User.prototype is a shared value, not created for each scope!
    if (!User.prototype.hasOwnProperty("super")) { // Don't call if User.prototype is already defined as my object
        console.log("I am setting up the prototype: " + User.callCounter);
        User.prototype = {
            super: true
        }
    }
    else{
        console.log("I skip prototype setting..")
    }

    this.__proto__ = User.prototype; // Overwrite hack

    this.firstName = firstName
}

var user1 = new User("Mustafa");

console.log(user1.__proto__);
console.log(user1.__proto__.super);
console.log(user1.super)

user2 = new User("Kemal");
console.log(user2.super); // I am reaching the same object



