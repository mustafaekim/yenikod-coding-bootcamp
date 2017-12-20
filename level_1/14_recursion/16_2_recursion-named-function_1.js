function bar(){
    // -> I can call bar
}

var foo = function(){
    // -> I cannot call my-self however I can call foo which points me!
    // -> However, the value inside foo may be changed! I don't control it.
}

// That's why function declarations are preferable.
// They allow the function to call itself without any intermediary
var foo = function bar(){
    // -> bar()
}


// named functions are self-documenting (self-expressive)
// 70% of time is spent on reading codes!