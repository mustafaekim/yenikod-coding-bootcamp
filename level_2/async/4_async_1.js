function getRandomSeconds(max) {
    var limit = max || 5;
    return Math.floor(Math.random() * limit) + 1;
}


function getX(cb) {
    let t = getRandomSeconds();
    console.log("getX will respond after", t, "seconds");

    let cbWithClosure = function () {
        cb("X");
    }
    setTimeout(cbWithClosure, t * 1000);
}

function logResult(result) {
    console.log(result);
}

//getX(logResult);

// Step 2

function getY(cb) {
    let t = getRandomSeconds();
    console.log("getY will respond after", t, "seconds");

    let cbWithClosure = function () {
        cb("Y");
    }
    setTimeout(cbWithClosure, t * 1000);
}

function getZ(cb) {
    let t = getRandomSeconds();
    console.log("getZ will respond after", t, "seconds");

    let cbWithClosure = function () {
        cb("Z");
    }
    setTimeout(cbWithClosure, t * 1000);
}

/*
getX(logResult);
getY(logResult);
getZ(logResult);
*/


// Step 3
// Runs one after other but does not BLOCK!
/*
getX(function (x) {
    console.log(x);
    getY(function (y) {
        console.log(y);
        getZ(function (z) {
            console.log(z);
        })
    })
})

console.log("END?")
*/


// Goal: How can I make getX, getY and getZ work concurrently and display the results in the right order?
let results = {
    x: undefined, y: undefined, z: undefined
}

function storeResult(key, result){
    results[key] = result;
    if(results.x && results.y && results.z){
        for(key in results){
            console.log(key, ": ", results[key]);
        }
    }
}

function captureResult(key){
    return function(result){
        storeResult(key, result);
    }
}

getX(captureResult("x"));
getY(captureResult("y"));
getZ(captureResult("z"));