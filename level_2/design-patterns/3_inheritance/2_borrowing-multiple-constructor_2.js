/*
    Borrowing constructor pattern can be used for multiple inheritances
*/

function Bird(noOfWings){
    this.noOfWings = noOfWings;
}

function Man(name){
    this.name = name;
}

function BirdMan(noOfWings, name){
    Man.call(this, name);
    Bird.call(this, noOfWings);
}

var jack = new BirdMan(3, "Jack");

console.log("(1)", jack.hasOwnProperty("noOfWings")) // -> true
console.log("(2)", jack.hasOwnProperty("name")) // -> true