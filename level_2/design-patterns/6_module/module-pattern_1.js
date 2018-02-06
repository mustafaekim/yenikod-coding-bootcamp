/*
    The counter variable is actually fully shielded from our global scope so it acts just like a private variable would 
        - its existence is limited to within the module's closure so that the only code able to access its scope are our two functions
    
    + encapsulation


    The Module Pattern must satisfy the following:
        * Private members live in the closure.
        * Public members are exposed in the return object.
*/

var testModule = (function () {

    // private function
    function incrementBy(n) {
        counter += n;
        return counter;
    }

    // private variable
    var counter = 0;

    // I return a newly created object that has closure incrementBy() and counter
    // public
    return {
        incrementCounter: function () {
            console.log("Incrementing > current value: ", counter, "new value: ", incrementBy(1))
            return counter;
        },
        resetCounter: function () {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    };

})();

// Usage:

// Increment our counter
testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();