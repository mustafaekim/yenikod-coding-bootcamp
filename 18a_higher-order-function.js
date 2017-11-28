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


// if that is ok
/* 
function add(x, y) {
    return x + y;
}

add(1, 5);
*/

//that also should

/*
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
*/



/*
function buildNumbersArray(limit, filter){
    var arr = [];
    for(var i = 0; i<limit; i++){
        if(filter(i)){
            arr[arr.length]=i;
        }
    }
    return arr;
}

var pairNumbersArray = buildNumbersArray(10, function(i){
    return i%2 == 0;
});

var unpairNumbersArray = buildNumbersArray(20, function(i){
    return i%2 == 1;
})


console.log(pairNumbersArray);
console.log(unpairNumbersArray);
*/