"use strict"

function User(){
    this.name = "Mustafa"
}

console.log(User().name); // -> grr
console.log(new User().name);


// return overrites the value returned by new (empty object that is passed to function, this referencing this object)
function Car(){

    if(this){
        this.name = "Ahmet";
    }

    return {
        name: "Mustafa"
    }
}

console.log(new Car().name);
console.log(Car().name);