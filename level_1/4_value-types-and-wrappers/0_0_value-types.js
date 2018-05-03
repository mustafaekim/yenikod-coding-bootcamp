/*
    Primitive value types:
        null : null
        undefined : undefined
        string : "any string witin the double quotes"
        number : any number including floating numbers
        boolean : true, false    

    typeof unary operator returns the type of the value. 
    When the argument is a variable, it return the type of the value in a
*/


var a;
console.log(typeof a);

a = "Hello";
console.log(typeof a);

a = 1;
console.log(typeof a);

a = true;
console.log(typeof a);
a = false;
console.log(typeof a);

a = undefined;
console.log(typeof a);

a = null;
console.log(typeof a); //bug


function add(first, second){
    return first + second;
}
console.log(typeof add);


console.log(typeof []);

console.log("*", typeof typeof [])

