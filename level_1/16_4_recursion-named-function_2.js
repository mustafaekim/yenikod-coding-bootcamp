var foo = function zoo(i) {
    if (i > 5) {
        return a;
    }
    else {
        return i + zoo(i + 1);
    }
}

console.log(foo(2)); // -> check stack trace

