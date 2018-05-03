/*
    Compound operators:
        +=
        -=
        *=
        /=
*/

var x = 10;

x += 10; // same as: x = x + 10;
console.log(x);

x -= 5; // same as: x = x - 5;
console.log(x);

x *= 2; // same as: x = x * 2;
console.log(x);

x /= 3; // same as: x = x / 3;
console.log(x);


// the compound operator returns the final (after the assignment) value in the variable
var z = 20;
console.log(z += 5);