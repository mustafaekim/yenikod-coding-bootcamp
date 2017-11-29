// properties can have any type of values

// when the value of a propery is a function, it is called a method
// this keyword inside a method refers to the object

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

