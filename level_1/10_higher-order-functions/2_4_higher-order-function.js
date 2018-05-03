function foo(bar){
    return function(x){
        return bar(x);
    }
}

var x = foo(function(v){
    return v*2;
})(3);

console.log(x);