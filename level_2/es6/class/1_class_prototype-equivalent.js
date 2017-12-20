function Person(fn, ln) {
    this.firstName = fn;
    this.lastName = ln;
};

Person.prototype.getInfo = function () {
    //In real life this method/function will be bigger
    return "Hi i am " + this.firstName + " " + this.lastName;
}

function Employee(fn, ln, empid) {
    Person.call(this, fn, ln);
    this.empid = empid;
};

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.getId = function () {
    return "Hi my employee id is " + this.empid;
}
var e1 = new Employee("john", "doe", 123);
console.log(e1.getInfo());// Hi i am john doe
console.log(e1.getId()); // Hi my employee id is 123