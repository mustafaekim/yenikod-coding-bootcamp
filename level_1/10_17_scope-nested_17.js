for (var i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i) }, 1000);
}

console.log("--")

for (var i = 0; i < 5; i++) {
    (
        function IIFE() {
            var j = i;
            setTimeout(function () { console.log(j) }, 1000)
        }
    )();
}

