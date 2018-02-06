/*
    A constructor call to Car will create a scope 
        and return a new object having some properties publicly available
            while function within properties will have closure over the scope of the function call

    Note that each object constructed by Car will have its own copy of properties
*/

function Car(model, year, miles) {

    // private variables
    var engine = 10;

    // private functions
    function computeEnginePower(){
        return engine * 5;
    }

    // public properties
    this.model = model;
    this.year = year;
    this.miles = miles;

    // public functions
    this.toString = function () {
        return this.model + " has done " + this.miles + " miles";
    };

    this.calculatePower = computeEnginePower;
}

// Usage:

// We can create new instances of the car
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

/* -- */
console.log(civic.toString());
console.log(mondeo.toString());

/* -- */
console.log(civic.calculatePower());

/* -- */

console.log(mondeo.toString.call(civic));