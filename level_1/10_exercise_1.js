function y(){
    var z = 10;

    function bar(){
        return z;
    }

    return bar;
}

var z = 15;

// can you call bar so that it returns 15?
