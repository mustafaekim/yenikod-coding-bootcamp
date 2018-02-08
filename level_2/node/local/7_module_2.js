var fs = require("fs");


const CODE_FILE_PATH = "0_data-code_2.js";

var codeFileContent = fs.readFileSync(CODE_FILE_PATH, "utf8");
var codeFileAsAFunction = new Function("exports", codeFileContent);
codeFileAsAFunction("Hello module, do you hear me?");