var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log("My value: " + i);
    };
}

for (var j = 0; j < 3; j++) {
    funcs[j]();
}
