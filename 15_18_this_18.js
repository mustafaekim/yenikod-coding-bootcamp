// hard binding with arguments

function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = function () {
    return foo.apply(obj, arguments);
};

var b = bar(3); // 2 3
console.log(b); // 5