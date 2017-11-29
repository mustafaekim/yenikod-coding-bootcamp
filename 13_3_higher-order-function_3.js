function buildNumbersArray(limit, filter) {
    var arr = [];
    for (var i = 0; i < limit; i++) {
        if (filter(i)) {
            arr[arr.length] = i;
        }
    }
    return arr;
}

var pairNumbersArray = buildNumbersArray(10, function (i) {
    return i % 2 == 0;
});

var unpairNumbersArray = buildNumbersArray(20, function (i) {
    return i % 2 == 1;
})


console.log(pairNumbersArray);
console.log(unpairNumbersArray);
