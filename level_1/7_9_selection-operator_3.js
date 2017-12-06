// Example 2
function doSomething() { console.log("I am doing something"); return true; }
function doSomethingElse() { console.log("I am doing something else"); return false }

function shortCircuitEvaluation() {
    // logical OR (||)
    doSomething() || doSomethingElse(); // || short cirtuit
    console.log("--");

    // logical AND (&&)
    doSomething() && doSomethingElse();
    console.log("--");

    // logical AND (&&)
    doSomethingElse() && doSomething(); // && short circuit
}
shortCircuitEvaluation();

// Same as:
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

