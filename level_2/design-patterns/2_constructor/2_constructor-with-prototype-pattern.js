/*
    Each object constructed by Car, will have its own instance of properties (model, year, miles)
        meanwhile they will all be delegated same properties through Car.prototype
*/

function Car(model, year, miles) {

    this.model = model;
    this.year = year;
    this.miles = miles;

}

Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
};

// Usage:

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());