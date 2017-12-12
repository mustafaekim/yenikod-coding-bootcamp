/*
    Borrowing Constructor Pattern
        This pattern is like "Class-ical inheritance" however this variation solves the problem of passing arguments from the child to the parent
            * Parent.apply(this, arguments);

    Drawback 
        * nothing from the prototype gets inherited
*/

function User(userId, name){
    console.log(`new User(${userId}, ${name})`);
    this.userId = userId;
    this.name = name;
}

User.prototype.getName = function(){
    return this.name;
}

function Student(userId, name, studentNo){
    var userArguments = Array.prototype.slice.call(arguments, 0, 2); // extract elements 0 and 1 from arguments into a new array
    User.apply(this, userArguments)
    this.studentNo = studentNo;
}

var student1 = new Student(1, "Mustafa", 356);
console.log("(1)", student1.hasOwnProperty("userId")) // -> true!
console.log("(2)", student1.userId == 1) // -> true!
console.log("(3)", student1.constructor === Student) // -> true!
console.log("(4)", student1.getName === undefined) // -> true! // Borrowing constructor pattern does create prototype links between objects