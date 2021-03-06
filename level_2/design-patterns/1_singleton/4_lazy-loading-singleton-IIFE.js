/*
    Problems:
        logger object is instantiated in all cases (even if it's not needed/used)
        logger object is never removed
*/


var logger = (function Logger() {
    // private
    var __levels = ["DEBUG", "INFO", "WARNING", "ERROR"];
    function __log(level, message) {
        console.log(new Date() + " | " + level + ": " + message);
    }
    function __debug(message) {
        __log(__levels[0], message);
    }
    function __info(message) {
        __log(__levels[1], message);
    }
    function __warning(message) {
        __log(__levels[2], message);
    }
    function __error(message) {
        __log(__levels[3], message);
    }
    var instance;
    function init() {
        instance = {
            debug: __debug
            , info: __info
            , warning: __warning
            , error: __error
        }
    }
    return {
        getInstance: function () {
            if (!instance) init(); // <- attention here
            return instance;
        }
    }
})(); // () <- attention here

var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// I need only the multiples of both 2 and 3
for (var i = 0; i < nums.length; i++) {
    logger.getInstance().debug("Current number:" + i);

    if (i % 2 == 0 && i % 3 == 0) {
        logger.getInstance().info("CORRECT NUMBER: " + i);
        continue;
    }

    else {
        if (i % 2 == 0) {
            logger.getInstance().warning(i + " is a multiple of 2 but not a multiple of 3");
            continue;
        }
        if (i % 3 == 0) {
            logger.getInstance().warning(i + " is a multiple of 3 but not a multiple of 2");
            continue;
        }
    }
}