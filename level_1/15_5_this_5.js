"use strict"

function user() {
    this.name = "Mustafa";
    this.lastName = "Ekim";
    this.age = 35;
    this.school = "zkool"
    return this;
}
console.log(user.call({ school: "mkool" }));