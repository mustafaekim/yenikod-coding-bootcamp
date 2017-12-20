/*
    "if" and "else" can be constructed without block operators, in this case only the next statement is attached into the if/else
*/

var y, x = 9;

if (x > 10)
    y = x + 1;
else
    y = x - 1; console.log(x, y);

