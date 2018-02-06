function getRandomSeconds(max) {
    var limit = max || 5;
    return Math.floor(Math.random() * limit) + 1;
}

function sleep(seconds) {
    var waitUntil = new Date().getTime() + seconds * 1000;
    while (new Date().getTime() < waitUntil) true;
}

function getX() {
    let s = getRandomSeconds();
    console.log("Sleeping getX", s, "seconds");
    sleep(s);
    return "X"
}

// Step 1
//console.log(getX()); 
// ---



function doX(cb) {
    let result = getX();
    cb(result);
}

// Step 2
// doXCB(function (x) { console.log("Voila: ", x) })
// ---

function getY() {
    let s = getRandomSeconds();
    console.log("Sleeping getY", s, "seconds");
    sleep(s);
    return "Y"
}

function getZ() {
    let s = getRandomSeconds();
    console.log("Sleeping getZ", s, "seconds");
    sleep(s);
    return "Z"
}

function doY(cb) {
    let result = getY();
    cb(result);
}

function doZ(cb) {
    let result = getZ();
    cb(result);
}

//

function logResult(x){
    console.log(x);
}

// Sync

doX(logResult);
doY(logResult);
doZ(logResult);



