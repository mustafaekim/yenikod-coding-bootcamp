var foo = function (i) {
    if (i > 5) {
        return 6;
    }
    else {
        return i + foo(i + 1);
    }
}

console.log(foo(2));
/* 
    2 + foo(3)
        3 + foo(4)
            4 + foo(5)
                5 + foo(6)
                    6
    -> 2 + 3 + 4 + 5 + 6 = 20
*/

var moo = foo;
foo = function () { return "You better know your name!" }
console.log(moo(2));


// Try with naming the function expression.