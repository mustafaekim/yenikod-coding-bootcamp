var a = 10;
var a = 14; // repeating var declarations are ignored by the compiler

function hi(){
    return "hello";
}

function hi(){ // the last function declaration overwrites the previous one
    return "hi"
}

console.log(hi(), a);


