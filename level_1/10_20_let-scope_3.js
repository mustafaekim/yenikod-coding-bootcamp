for (var i = 0; i < 5; i++) {
    var j = "*";
    setTimeout(function () { console.log(j, i) }, 1000)
}



for (let i = 0; i < 5; i++) {
    // i is block scoped for each iteration
    let j = "*";
    setTimeout(function () { console.log(j, i) }, 1000)
}

/* -> It's like we have a new scope for each iteration

    for (var i = 0; i < 5; i++) {
        (
            function IIFE() {
                var j = i;
                setTimeout(function () { console.log(j) }, 1000)
            }
        )();
    }

*/

// Always use let inside the for statement (don't pollute the global)