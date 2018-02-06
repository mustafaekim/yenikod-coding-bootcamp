'use strict'

var transformer = function (arr, transform) {
    var result = [];
    for (var a = 0; a < arr.length; a++) {
        result[a] = transform(arr[a] ,5);
    }
    return result;
}

var transformF = function (i, b) {               
    return i * b                                   
}


console.log(transformer([1, 2, 3], transformF));
console.log(transformF(3,15));