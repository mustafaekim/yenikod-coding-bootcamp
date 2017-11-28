// The addition operator (+) produces the sum of numeric operands or string concatenation.

var x = 10;
var y = 10 + 5; // as if: y = 15;
var z = x + y; // x holds the value 10. y holds the value 15. Addition operator adds those (10 and 15) numbers and assign 25 into variable z

// Note that, addition operator is executed before the assignment operator. 
// That's because of the precedence of the operators.
// Operators may have different precedence. Because addition operator has a higher precedence than assignment operator, first the addition operator is executed.
// Operators with higher precedence become the operands of operators with lower precendence.
// Hence, addition operator, once executed returns a value, and that value becomes the operand of the assignment operator.

// lets print all the values to the console
console.log(x); // prints 10
console.log(y); // prints 15
console.log(z); // prints z

// Note that, even though a value is assigned into a variable, we can re-assign another value into this variable.
x = 100;
console.log(x); // prints 100

// When the operands are values of type string, addition operator creates a new string by adding string one after another
x = "Mustafa" + " Ekim";
console.log(x); // prints "Mustafa Ekim"


// Below is a short list of operators

/* 
    Assignment operator
    =       
    
    Math operators:
    +       addition
    -       substraction
    *       multiplication
    /       division
    %       remainder

    Equality operators
    ==      loose equals
    ===     strict equals
    !=      loose not equals
    !==     strict not equals


    Logical selection
    &&      and
    ||      or

*/

x = 10 / 2 * 3 + 4 - 8;
console.log(x);

x = 3;
y = 4;
z = 5;
var m = x * 2 + 4 / y - z;
console.log(m);

// () is also an operator: Grouping operator
// The grouping operator ( ) controls the precedence of evaluation in expressions.
m = x * (2 + 4) / (y - z);
console.log(m);

