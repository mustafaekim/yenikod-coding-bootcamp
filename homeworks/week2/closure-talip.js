'use strict'

/*  
// QUESTION 1:

function seven(){

    return 7;
}

console.log(seven()); 
*/

/*  
// QUESTION 2:

function seven(i){

    return i;
}

console.log(seven(i))

*/

/*  
// QUESTION 3:

function returner() {

    return function a() {
        return 7
    };
};

console.log(returner()); 
*/

/* 
// QUESTION 4:                        

function valueAssign(a) {

    return function returner() {

        return a;
    };

};

console.log(valueAssign(4)());
console.log(valueAssign(5)());
console.log(valueAssign(3)());

*/


/* 
//QUESTION 4:  

function valueAssign(a) {
    
        return function returner1() {
    
            return a+1;
        };
    
    };
    
    console.log(valueAssign(4)());
    console.log(valueAssign(5)());
    console.log(valueAssign(3)());

*/


/* 
//QUESTION 5: 

var Q5 = valueAssign(a);
function valueAssign(a){
       var times = 0;
       times++;
    return function returner(){
        return a+1+times;
    };
};

valueAssign(4);
valueAssign(4);
Q5(4);
Q5(4); 

*/


//QUESTION 6: 
/*
var a = function valueAssign() {
    var times = 0;
    return function returner() {
        times++;
        return times;
    };
};
*/