// Explicit Binding

function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
};

foo.call(obj); // 2