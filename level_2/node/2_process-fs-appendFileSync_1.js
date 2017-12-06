/*
    
*/

// Load built-in modules
var fs = require("fs");


// Don't use Magic Strings & Numbers on your code
const LOG_FILE_ABSOLUTE_PATH = __dirname + "/../../log/" + extractFileName(__filename) + ".txt";

function extractFileName(path){
    var pathSplitter = path.indexOf("/") == -1 ? "\\" : "/";
    var arr = path.split(pathSplitter);
    return arr[arr.length-1];
}
// ~ same as built-in require("path").basename function

function buildErrorText(error){
    return new Date() + "\n".concat(error.name, error.message, "\n", error.stack, "\n\n\n");
}

function catchExceptions() {
    process.on("uncaughtException", function (err) {
        console.log("=^==^==^==^==^==^==^==^==^==^==^=")
        console.log("Hey, pay attention to your code!");
        console.log(err.name, err.message);
        console.log("See the error log file for more info");
        console.log("=================================")

        //fs.writeFileSync(LOG_FILE_ABSOLUTE_PATH, buildErrorText(err))
        fs.appendFileSync(LOG_FILE_ABSOLUTE_PATH, buildErrorText(err));        
    })
}

/* -- */

process.on("beforeExit", function (exitCode) {
    console.log("Exiting program", exitCode);
})

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

catchExceptions(); // Let's handle exceptions so that we can exit under control
a; // Error!