// arguments is an array-like object passed into the body environment

function hi(firstName, lastName, age){
    for(var i = 0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}

hi("Mustafa", "Ekim", 35);



// console.log(arguments)
