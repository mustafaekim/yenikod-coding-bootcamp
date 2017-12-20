var User = (
    function(){

        function UserF(name){
            this.name = name;
        }

        UserF.prototype.super = true;

        return UserF;
    }
)();

var user1 = new User("Mustafa");

console.log(user1.name);
console.log(user1.super)

console.log(user1 instanceof User); // because User.prototype is user1.__proto__
console.log(User.name)


