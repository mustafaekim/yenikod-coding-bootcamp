/*
    
*/

// Load built-in modules
var fs = require("fs");
var path = require("path");

const USER_JSON_FILE_NAME = "0_data_user.json";

// I use relative path because I know the file is on the same directory
// I could also create an absolute path by using 
    // __dirname + "/" + USER_JSON_FILE_NAME
    // because __dirname returns the absolute path of the process
var userJsonStr = fs.readFileSync(USER_JSON_FILE_NAME, "utf8")

// Building user object
var user = JSON.parse(userJsonStr);
console.log(user.name);

// Modifying user object
user.school = "Mkool";

fs.writeFileSync(USER_JSON_FILE_NAME, JSON.stringify(user));


