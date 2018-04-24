/*
    Sync Thunk
        - wraps a value and returns you back that value when you call back
*/  

function syncAdd(x,y){
    return x+y;
}

var thunk = function(){
    return syncAdd(10,15);
}

console.log(thunk()); // -> 25

// thunk is a container around a colletion of state (calling a function with some arguments)
// I can pass around the thunk in my program, as a container - wrapped around that state - and everytime I need that value, I call the thunk
// I dont pass the value or the state itself, but the thunk
// A thunk = a wrapper around a value