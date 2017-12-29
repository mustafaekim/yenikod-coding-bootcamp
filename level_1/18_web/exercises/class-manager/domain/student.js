var User = require("../domain/user");

function Student(userId, firstName, lastName, email, mobile){
    User.apply(this, arguments) // Rent Constructor Pattern
}
Student.prototype = Object.create(User.prototype); // Temporary Constructor Pattern
Student.prototype.constructor = Student;


/* Export */
module.exports = Student;
