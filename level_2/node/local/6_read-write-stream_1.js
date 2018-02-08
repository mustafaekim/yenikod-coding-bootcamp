/*
    fs.createReadStream(path[, options])
        returns a new ReadStream object

        options is an object or string with the following defaults:
            const defaults = {
                flags: 'r',
                encoding: null,
                fd: null,
                mode: 0o666,
                autoClose: true
            };

        options can include start and end values to read a range of bytes from the file instead of the entire file
*/


var fs = require("fs");

const FILE_TO_BE_STREAMED = "0_data_text-stream";
const FILE_TO_BE_WRITTEN = "0_data_text-stream-copy";

var myReadStream = fs.createReadStream(__dirname + "/" + FILE_TO_BE_STREAMED,
    {
        start: 0, end: 999, // the bytes range. If encoding is set to non-binary, that's the chars interval. Here we get first 1000 characters
        highWaterMark: 100 // size of chunk in bytes or length of string if encoding is set to non non-binary
        , encoding: "utf8"
    }
)

var myWriteStream = fs.createWriteStream(__dirname + "/" + FILE_TO_BE_WRITTEN);

var lengthSum = 0;
myReadStream.on("data", function (chunk) {
    console.log("\n=============================================")
    console.log("A new chunk has arrived, chunk length:", chunk.length);
    console.log(chunk)
    console.log("================================================")

    lengthSum += chunk.length;

    // Meanwhile, let's write this chunk on our write stream
    myWriteStream.write(chunk);
})

myReadStream.on("close", function () {
    console.log("\n\nEnd of stream. Total characters streamed: " + lengthSum);
})



