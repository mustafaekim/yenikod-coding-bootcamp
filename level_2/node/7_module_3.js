var fs = require("fs");


const CODE_FILE_PATH = "0_data-code_3.js";


function loadFileAsAFunction(relativeFilePath) {
    var codeFileContent = fs.readFileSync(CODE_FILE_PATH, "utf8");
    var codeFileAsAFunction = new Function("exports", codeFileContent);
    var exports = {};
    codeFileAsAFunction(exports);
    return exports;
}

console.log("(1)",
    loadFileAsAFunction(CODE_FILE_PATH).multipleByTwo(3)
);
