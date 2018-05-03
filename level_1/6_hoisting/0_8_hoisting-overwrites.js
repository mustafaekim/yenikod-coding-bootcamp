var a = 10;
var a = 14; // repeating var declarations are ignored by the compiler

console.log(hi(),a)

function hi(){
    return "hello";
}

console.log(hi(),a)

function hi(){ // the last function declaration overwrites the previous one
    return "hi"
}

console.log(hi(), a);


