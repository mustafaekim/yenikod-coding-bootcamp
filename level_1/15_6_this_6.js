"use strict"

function user(){
    this.name = "Mustafa";
    this.lastName = "Ekim";
    this.age = 35; 
}

var a = {
    friend: user
}

a.friend();
console.log(a);
