function makeAsyncThunk(fn) {
    // I am taking all arguments except the first argument (which is fn) into args
    var args = Array.prototype.slice.call(arguments, 1);

    return function (cb) {
        args.push(cb);
        fn.apply(null, args);
    }
}

function buildNumberList(size, cb){

    setTimeout(function(){

        var arr = [];
        for(var i = 0; i<size; i++){
            arr.push(i);
        }

        cb(arr);

    }, 0);
}


var thunk = makeAsyncThunk(buildNumberList, 100);
thunk(console.log)


