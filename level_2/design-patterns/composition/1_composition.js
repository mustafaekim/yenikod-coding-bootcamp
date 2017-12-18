//In real life this method/function will be bigger
//So taking this function out of createPerson will make sense then
function getInfo(firstName, lastName) {
    return "Hi i am " + firstName + " " + lastName;
}

function createPerson(fn, ln) {
    return {
        getInfo: function () { return getInfo(fn, ln) }
    };
}

//In real life this method/function will be bigger
//So taking this function out of createPerson will make sense then
function getId(empid) {
    return "Hi my employee id is " + empid;
}

//createEmployee makes use of composition. Its’ simple. Any function //which makes use of other functions to compose functionality is //said to be making use of composition. We all use it many times.
function createEmployee(fn, ln, empid) {
    return {
        getId: function () { return getId(empid); },
        getInfo: function () { return getInfo(fn, ln); }
    };
}
var e2 = createEmployee("john", "doe", 123);
console.log(e2.getInfo());// Hi i am john doe
console.log(e2.getId()); // Hi my employee id is 123