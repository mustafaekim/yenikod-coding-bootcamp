var x = "outside";
var f2 = function () {
    x = "inside f2";
};
f2();
console.log(x);
