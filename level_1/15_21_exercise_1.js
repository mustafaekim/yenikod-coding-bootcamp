/*
    create the function below
    function repeat(fn, n, args){}
    
    and call this function so that it prints 1 start for each line, 5 times
*/

function repeat(fn, n, args){
    for(var i = 0; i<n; i++){
        fn.apply(null, args);
    }    
}

repeat(console.log, 5, ["*"])