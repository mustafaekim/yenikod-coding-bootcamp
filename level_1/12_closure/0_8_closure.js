function foo() {
    var bar = 0;

    /*
        Below, there are 2 functions that are created on-the-fly but they are attached on the same lexical scope
        Hence they both reference the same variable bar
    */


    setTimeout(function () {
        console.log(bar++);
    }, 100);

    setTimeout(function () {
        console.log(bar++);
    }, 100);
}

foo();