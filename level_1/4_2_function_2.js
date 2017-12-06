function hi(text){
    return " Hi " + text;
}


var text = "*_*";
for(var a = 0; a<5; a++){
    text += hi(text);
}
console.log(text);







