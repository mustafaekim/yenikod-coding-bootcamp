var a = 10;
var fn;
function foo() {
    var a = 2;
    function baz() {
        console.log(a);
    }
    fn = baz; // assign baz to global variable
}
function bar() {
    fn(); // look ma, I saw closure!
}
foo();
bar(); // 2
