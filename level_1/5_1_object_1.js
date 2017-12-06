// a is declared to be a variable
// an object literal is assigned into the variable a
// the object has a property ( log is the key, 1 is the value of the log property) 

var a = {
    log: 1
}

// dot operator (object property accessor operator) returns the value of log property inside/of the object a
// this returned value is passed as a parameter to the function 
console.log( a.log);

// console is a built-in variable which holds (is assigned to) a value of type object
// object = bracket'ler  ve içi.


// [] operator returns the value of the object's property whose name is given as a string  inside the []'ler
console.log(a["log"]);