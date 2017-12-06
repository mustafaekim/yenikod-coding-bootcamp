function transformer(arr, filter) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (filter(arr[i])) {
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}
var zilter = function (i) {
    return i[0] == this.allowedChar;
};
var milter = function () {
    return zilter.apply({ allowedChar: 'b' }, arguments)
}
console.log(
    transformer(["blue", "black", "purple", "red"], milter)
)


