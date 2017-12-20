var User = (function () {

    // private static - only 1 instance of these values exists
    var counter = 0;

    function incrementId() {
        return ++counter;
    }
    function previousId(id) {
        return id - 1;
    }


    // constructor having closure
    function User(name, age) {
        // private
        var secret = Math.floor(Math.random() * (1000000 - 1)) + 1

        // public
        this.id = incrementId();
        this.name = name;
        this.age = age;

        // privileged functions : only this function has a closure over secret that's why we cannot put it into prototype
        // functions in prototype can only access public values and the function's lexical scope
        this.getMySecret = function () {
            return secret;
        }
    }

    // this prototype methods have closure over private static variables
    User.prototype.greet = function () {
        return "Hi, my name is "
            + this.name
            + " and I am "
            + this.age
            + " years old. I am the "
            + this.id
            + "th user of "
            + counter
            + " users in total."
            + " My secret is: "
            + this.getMySecret();
    }

    User.prototype.noOfUsersAfterMe = function(){
        return counter - this.id;
    }

    // public static
    User.types = ["STUDENT", "TEACHER"];
    User.nextId = function (user) {
        return user.id + 1;
    }

    return User;
})();

var user1 = new User("Mustafa", 35);
console.log(user1.greet());

var user2 = new User("Arda", 19);
console.log(user2.greet());



console.log("There are " + user1.noOfUsersAfterMe() + " user(s) created after " + user1.name);
console.log("There are " + user2.noOfUsersAfterMe() + " user(s) created after " + user2.name);

console.log("The next user after " + user2.name + " will have the id: " + User.nextId(user2));