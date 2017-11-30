// objects are passed as reference

var car = { name: "Volvo"}

var person = {
    favoriteCar: car
}

console.log(person.favoriteCar);
car.name = "Renault"
console.log(person.favoriteCar);