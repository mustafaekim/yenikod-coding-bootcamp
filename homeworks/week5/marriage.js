var User = (function () {

    var marriages = [];

    return function (name) {

        this.name = name;

        this.marry = function (userToMarry) { 

            // am I married ?
            // -> return Err

            // is he/she married?
            // -> return Err

            // marry.    


        };

        this.divorce = function (userToDivorce) {

            // am I married?
            // -> return Err

            // am I married to NOT userToDivorce?
            // -> return Err

            // divorce

         };
    }

})();

var mustafa = new User("Mustafa");
var boriana = new User("Boriana");
var talip = new User("Talip");
var busra = new User("Büşra");

mustafa.marry(boriana); // -> OK
boriana.marry(busra); // -> Sorry but Boriana is already married!
busra.marry(mustafa); // -> Sorry but Mustafa is already married!

// console.log(User.noOfCouples()) // -> 1

// talip.marry(busra) // -> OK
// console.log(User.noOfCouples()) // -> 2

// talip.divorce(busra) // -> OK
// console.log(User.noOfCouples()) // -> 1

boriana.divorce(busra) // -> Sorry but Boriana and Büşra are not married!