/*
    Problems:
        logger object is instantiated in all cases (even if it's not needed/used)
        logger object is never removed
*/


var logger = (function Logger(masterDefaultLevel) {

    function SingleLogger(optionalLevel) { // <- we get a level
        const DEFAULT_LEVEL_INDEX = 0; // latest fallBack
        var __levels = ["DEBUG", "INFO", "WARNING", "ERROR"];
        var defaultLevelIndex;

        // When SingleLogger is called, the code below runs in its own scope.
        (function selectDefaultLevel() {
            // First priority is masterDefaultLevel
            var masterDefaultLevelIndex = __levels.indexOf(masterDefaultLevel);
            if (masterDefaultLevelIndex > -1) { defaultLevelIndex = masterDefaultLevelIndex; }

            // Second priority is fallBackLevel
            else {
                let optionalLevelIndex;
                optionalLevelIndex = __levels.indexOf(optionalLevel);
                if (optionalLevelIndex > -1) { defaultLevelIndex = optionalLevelIndex }
                else { defaultLevelIndex = DEFAULT_LEVEL_INDEX; } // Last priorty is setting to DEFAULT_LEVEL_INDEX
            }
        })();


        // private
        function __log(level, message) {
            console.log(new Date() + " | " + level + ": " + message);
        }

        this.debug = function __debug(message) {
            __log(__levels[0], message);
        }

        this.info = function __info(message) {
            __log(__levels[1], message);
        }

        this.warning = function __warning(message) {
            __log(__levels[2], message);
        }

        this.error = function __error(message) {
            __log(__levels[3], message);
        }

        this.default = function __default(message) { // <- That's new
            __log(__levels[defaultLevelIndex], message);
        }

    }

    var instance;

    return {
        getInstance: function (defaultLevel) {
            if (!instance) instance = new SingleLogger(defaultLevel); // <- attention here
            return instance;
        }
    }
})("INFO"); // () <- attention here

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

logger.getInstance().default("Hey, what's my level?"); //-> What's the default level?

logger.getInstance("ERROR").default("Is it ERROR level now?") // -> No. It's a singleton