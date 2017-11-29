function Square(size){

    if(size){
        build(size);
    }
    else{
        throw new Error();
    }

    var width, height;
    function build(size){
        width = size;
        height = size;
    }
    function getSize(){
        return width;
    }
    return {
        width: width,
        setSize: build,
        getSize: getSize
    }
}

var largeSquare = Square(5);

//console.log(largeSquare.width);
//console.log(largeSquare.getSize());
//console.log(largeSquare.getSize());
//largeSquare.setSize(10);
//console.log(largeSquare.getSize());

