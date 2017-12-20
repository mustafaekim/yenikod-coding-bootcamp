var User = function UserF(name){
    this.name = name;

    // Sorry! the object is already created and __proto__ linked! next time budy!
    User.prototype = {
        super: true
    }
}

var user1 = new User("Mustafa");
console.log(user1.super);