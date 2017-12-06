/*
    There are 3 channels through which our JS app is communicating to the environment
        process.stdin: a readable stream for stdin
        process.stdout: a writable stream for stdout
        process.stderr: a writable stream for stderr
*/



// Let's modify stdin so that it transforms a buffer to a string by using utf-8 encoding
process.stdin.setEncoding("utf-8");

process.stdin.on("readable", function(){
    var input = process.stdin.read();

    if(input != null){
        process.stdout.write(input.toUpperCase())
    }
})