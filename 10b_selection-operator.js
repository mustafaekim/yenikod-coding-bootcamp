
var first = false && true || true      // returns true
var second = false && (true || true)     // returns false

//console.log("First: " + first + " Second: " + second);

/**
    a1 = true  && true       // t && t returns true
    a2 = true  && false      // t && f returns false
    a3 = false && true       // f && t returns false
    a4 = false && (3 == 4)   // f && f returns false
    a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
    a6 = false && 'Cat'      // f && t returns false
    a7 = 'Cat' && false      // t && f returns false
    a8 = ''    && false      // f && f returns ""
    a9 = false && ''         // f && f returns false


    o1 = true  || true       // t || t returns true
    o2 = false || true       // f || t returns true
    o3 = true  || false      // t || f returns true
    o4 = false || (3 == 4)   // f || f returns false
    o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
    o6 = false || 'Cat'      // f || t returns "Cat"
    o7 = 'Cat' || false      // t || f returns "Cat"
    o8 = ''    || false      // f || f returns false
    o9 = false || ''         // f || f returns ""

    n1 = !true               // !t returns false
    n2 = !false              // !f returns true
    n3 = !'Cat'              // !t returns false
 */


// Example 1
console.log(null || "user")
// → user

console.log("Karl" || "user")
// → Karl

var a = 5;
console.log(a && 100);
// -> 100


// Example 2
function doSomething() { console.log("I am doing something"); return true; }
function doSomethingElse() { console.log("I am doing something else"); return false }


function shortCircuitEvaluation() {
    // logical OR (||)
    doSomething() || doSomethingElse();

    // logical AND (&&)
    doSomething() && doSomethingElse();
}

shortCircuitEvaluation();

function equivalentEvaluation() {

    // logical OR (||)
    var orFlag = doSomething();
    if (!orFlag) {
        doSomethingElse();
    }


    // logical AND (&&)
    var andFlag = doSomething();
    if (andFlag) {
        doSomethingElse();
    }
}

