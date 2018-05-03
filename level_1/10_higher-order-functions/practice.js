/*
var bar = function () {

    function add(num1, num2) {
        return num1 + num2
    }

    function substract(num1, num2) {
        return num1 - num2
    }

    return function(num1, num2){
        return add(num1, num2) * substract(num1, num2);
    };

}

var zar = bar();
console.log(zar);
console.log(zar(1,2))
*/

/*
var foo = function (x) {
    return function (y) {
        return function (z) {
            return y * z * x
        }
    }
}(10);
console.log(foo);
console.log(foo(4));
console.log(foo(4)(3))
*/

/*
function bar(mult, num1, num2) {
    return mult(num1, num2);
}

var result = bar(function (x, y) {
    return x * y
}, 5, 10)
console.log(result);
*/


function greet(speakName, name, speakAge, age) {
    return speakName(name) + ", " + speakAge(age);
}

function hi(name) {
    return "Hi " + name;
}

function tellAge(age) {
    return "I am " + age + " years old";
}

console.log(
    greet(hi, "Mustafa", tellAge, 35)
)





