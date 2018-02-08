/*
    There are 3 channels through which our JS app is communicating to the environment
        process.stdin: a readable stream for stdin
        process.stdout: a writable stream for stdout
        process.stderr: a writable stream for stderr
*/

process.stdin.on("readable", function(){
    var input = process.stdin.read();

    if(input != null){
        process.stdout.write(input) // that works because write function go well with both buffer and strings
        //process.stdout.write(input.toUpperCase()) // err!
    }
})