/* 
    A variable can be assigned a default value
*/

var a,b,c;

[a=1, b=4, c] = [3];
console.log(a,b,c);


/* 
    A value can be ignored
*/

[a,,c]=[1,2,3];
console.log(a,c);

/*
    object destructuring with default values
*/
var {a:aa = 10, b:bb = 5} = {a: 3};
console.log(aa, bb);