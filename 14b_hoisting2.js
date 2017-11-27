/*
function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}

test();
foo(); // err
*/



// hoisted version
/*
function test() {
    var a;
    function foo() {
        return 2;
    }

    console.log(a);
    console.log(foo());

    a = 1;
}

test();
*/
