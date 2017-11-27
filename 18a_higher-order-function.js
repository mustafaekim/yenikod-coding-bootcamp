/*
function hop(){
    return "hop";
}
//is equal to 
var hop = function hop(){
    return "hop";
}
*/

/*
function hi(){
    function selam(){
        return "selam"
    }
    return selam;
}
var salut = hi();
console.log(salut);
//console.log(salut());
//console.log(hi()());
*/

function add(x, y) {
    return x + y;
}

add(1, 5);


function greet(hi) {
    var message = hi();
    console.log(message);
}
function hello() { return "hello" }
function selam() { return "selam"; }

//console.log(salut);
// greet(hello);

var lang = "en";
switch (lang) {
    case "tr":
        greet(selam);
        break;
    case "en":
        greet(hello);
}

