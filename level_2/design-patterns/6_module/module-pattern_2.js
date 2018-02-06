/*
    A globals or a simple argument can be passed in to our module's anonymous function. 
*/

var testModule = (function (incrementingStep) {

    function increment(){
        return incrementBy(incrementingStep);
    }

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
            console.log("Incrementing > current value: ", counter, "new value: ", increment())
            return counter;
        },
        resetCounter: function () {
            console.log("counter value prior to reset: " + counter);
            counter = 0;
        }
    };

})(2); // <- attention here

// Usage:

// Increment our counter
testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();