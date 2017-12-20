/*
    Increment/decrement operators
        ++
        --
*/

var x = 10;

x++; // here, same as: x = x + 1;
console.log(x);

x--; // here, same as: x = x - 1;
console.log(x);


/*
    Increment/decrement operator can be placed before or after the operand.
    Even thought both increment/decrement the operand by 1, the operator returns different value
        * If used postfix, with operator after operand (for example, x++), then it returns the value before incrementing.
        * If used prefix with operator before operand (for example, ++x), then it returns the value after incrementing.
*/

var y = 10;
console.log(y++);
console.log(y);

var z = 10;
console.log(--z);
console.log(z);
