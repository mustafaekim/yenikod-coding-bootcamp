/*
    Libs
*/

function getRandomSeconds(max) {
    var limit = max || 5;
    return Math.floor(Math.random() * limit) + 1;
}

function makeAsyncThunk(fn) {
    // I am taking all arguments except the first argument (which is fn) into args
    var args = Array.prototype.slice.call(arguments, 1);

    return function (cb) {
        args.push(cb);
        fn.apply(null, args);
    }
}

/* 
    App
*/

function getData(path, cb) {
    var randomSeconds = getRandomSeconds(5);
    console.log("will call the callback after ", randomSeconds, " seconds");
    setTimeout(
        function () {
            switch (path) {
                case "/mustafa":
                    cb("Mustafa Ekim");
                    break;
                case "/boryana":
                    cb("Boryana Doganova");
                    break;
                default:
                    cb(null);
                    break;
            }
        }
        , randomSeconds * 1000)
}

//getData("/mustafa", console.log);

var getMustafa = makeAsyncThunk(getData, "/mustafa");
//getMustafa(console.log)

var getBoryana = makeAsyncThunk(getData, "/boryana");

getMustafa(function(result1){
    getBoryana(function(result2){
        console.log(result1, result2);
    })
})

