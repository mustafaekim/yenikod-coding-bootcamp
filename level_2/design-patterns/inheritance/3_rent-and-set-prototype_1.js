/*
    Rent & Set Prototype pattern combines the class-ical inheritance pattern and borrowing constructor pattern

    This provides the most JAVAish classes.
        Student object get copies of the user’s own members and references to the user’s reusable functionality through the prototype chain

        This behavior is probably the closest to what you’d expect in Java;
            you inherit everything there is in the parent,
            and at the same time it’s safe to modify own properties without the risk of modifying the parent.

    Drawback 
        parent constructor is called twice
*/


function User(userId){
    this.userId = userId;
}


function Student(userId, name){
    User.call(this, arguments); // I would prefer to slice the arguments, rather than passing as it is!
}
Student.prototype = new User(); // passing no argument would set undefined to all properties set on new User()