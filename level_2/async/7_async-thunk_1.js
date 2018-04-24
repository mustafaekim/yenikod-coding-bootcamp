/*
    Async thunk
        - is a function that does not need anything but a callback function as an argument to get the value out of it
*/


/*
 The slice() method returns a shallow copy of a portion of an array into a new array object 
    selected from begin to end (end not included). The original array will not be modified.
*/

/*
    fn is expected to be a function
        that expects some arguments and produces a value
        and call the last argument (which is a callback function) with that produced value
*/

function asyncAdd(x, y, cb) {
    var sum = x + y;
    setTimeout(function(){
        cb(sum)
    }, 2000)
}

asyncAdd(4,5, console.log);


/*
    Generalize
*/

function makeAsyncThunk(fn) {
    // I am taking all arguments except the first argument (which is fn) into args
    var args = Array.prototype.slice.call(arguments, 1);

    return function (cb) {
        args.push(cb);
        fn.apply(null, args);
    }
}

var asyncThunk = makeAsyncThunk(asyncAdd, 5, 6);

asyncThunk(console.log);