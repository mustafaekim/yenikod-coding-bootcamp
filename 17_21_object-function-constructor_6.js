function User(name){

    if(!User.prototype.super){ // runs once
        User.prototype.super = true;
    }

    this.name = name; // runs everytime the function is called
}

var user1 = new User("Mustafa");

console.log(user1.name);
console.log(user1.super)