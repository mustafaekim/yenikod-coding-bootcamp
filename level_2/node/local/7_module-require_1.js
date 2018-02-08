/*
    require works just like the previous function that we've written
    but it has an additional caching step.
    require will cache the result for each given string (file path) 
        and in case of a cache exists, it will not load the file again, but return the cached result
*/

var fs1 = require("fs");
var fs2 = require("fs"); // That returns the cached returned value of the first require("fs") call

console.log(fs1 === fs2);


/*
    require function is something like below + performance optimizations
*/

function require(moduleName) {
    if (moduleName in require.cache)
        return require.cache[moduleName];
    else {
        var codeFileContent = fs.readFileSync(CODE_FILE_PATH, "utf8");
        var code = new Function("exports, module", codeFileContent);
        var exports = {}
        var module = { exports: exports };
        code(exports, module);

        require.cache[moduleName] = module.exports;
        return module.exports;
    }
}
require.cache = Object.create(null);

