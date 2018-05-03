function foo() {
    var a = 2;
    function baz() {
        console.log(a); // 2
    }
    bar(baz);
}
function bar(fn) {
    var a = 10;
    fn(); // look ma, I saw closure!
}

foo();
