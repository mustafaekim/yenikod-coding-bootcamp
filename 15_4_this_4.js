"use strict"

function user() {
    this.name = "Mustafa";
    this.lastName = "Ekim";
    this.age = 35;
    return this;
}
console.log(user.call({}));