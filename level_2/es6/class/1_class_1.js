class Person {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }

    getInfo() {
        //In real life this method/function will be bigger
        return "Hi i am " + this.firstName + " " + this.lastName;
    }
}
class Employee extends Person {
    constructor(fn, ln, eid) {
        super(fn, ln);
        this.empid = eid;
    }

    getId() {
        return "Hi my employee id is " + this.empid;
    }
}
const e1 = new Employee("john", "doe", 123);
console.log(e1.getInfo());// Hi i am john doe
console.log(e1.getId()); // Hi my employee id is 123