function getRandomSeconds(max) {
    var limit = max || 5;
    return Math.floor(Math.random() * limit) + 1;
}

function getX() {
    let t = getRandomSeconds();
    console.log("getX will respond in ", t, "seconds");

    let observers = [];
    let future = {
        onFinished: function (cb) {
            observers.push(cb);
        }
    }

    function execute() {
        observers.forEach(function (cb) {
            cb("X");
        })
    }

    setTimeout(execute, t * 1000);
    return future;
}

// Step 1

/*
let future = getX();

future.onFinished(function (result) {
    console.log("Finished 1: ", result);
});
future.onFinished(function (result) {
    console.log("Finished 2: ", result);
});
*/

// Step 2

function getY() {
    let t = getRandomSeconds();
    console.log("getY will respond in ", t, "seconds");

    let observers = [];
    let future = {
        onFinished: function (cb) {
            observers.push(cb);
        }
    }

    function execute() {
        observers.forEach(function (cb) {
            cb("Y");
        })
    }

    setTimeout(execute, t * 1000);
    return future;
}

function getZ() {
    let t = getRandomSeconds();
    console.log("getZ will respond in ", t, "seconds");

    let observers = [];
    let future = {
        onFinished: function (cb) {
            observers.push(cb);
        }
    }

    function execute() {
        observers.forEach(function (cb) {
            cb("Z");
        })
    }

    setTimeout(execute, t * 1000);
    return future;
}

function logResult(result) { console.log(result) }

let futureX = getX();
let futureY = getY();
let futureZ = getZ();
futureX.onFinished(logResult);
futureY.onFinished(logResult);
futureZ.onFinished(logResult);

// What is the advantage of this approach?
