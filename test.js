"use strict"

var car = { name: "Volvo"}

var a = {
    b: car.name
}

console.log(a.b);

car.name = "Renault"
console.log(a.b)