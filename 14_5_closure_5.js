var a = 10;
function foo() {
    var a = 2;
    function bar() {
        console.log(a);
    }
    return bar;
}
var baz = foo();
baz(); // 2 -- Whoa, closure was just observed, man.
// The function bar() has lexical scope access to the inner scope of foo()