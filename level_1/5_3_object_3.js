// properties can have any type of values

// when the value of a propery is a function, it is called a method (NOT 100% TRUE)
// when a function is called as a property of an object, it can be called a Method (TRUE)
// a function can be said to become a method if it is accessed as a property of an object (TRUE)
// So the same function can be called a method, depending on how it is called (within an object context or a through a simple reference)

var person = {
    counter: 0,
    increment: function () {
        this.counter++;
        return this.counter;
    }
}

console.log(typeof person.increment);
var c = person.increment();
console.log(c);
console.log(person.counter);

