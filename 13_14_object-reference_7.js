var car = { name: "Volvo"}

var person = {
    favoriteCar: car.name
}

console.log(person.favoriteCar);

car.name = "Renault"
console.log(person.favoriteCar);