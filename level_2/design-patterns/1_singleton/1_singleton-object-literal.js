/*
    Problems:
        logger object does not encapsulate its private members
        logger object is instantiated in all cases
        logger object is never removed
*/


var logger = {

    printLevel: 1,

    // Please don't change these! (??)
    levels: ["DEBUG", "INFO", "WARNING", "ERROR"]

    , log: function(level, message){
        if(this.levels.indexOf(level)>=this.printLevel)
            console.log(new Date() + " | " + level + ": " + message);
    }

    , debug: function(message){
        var level = this.levels[0]; // why this?
        this.log(level, message);
    }

    , info: function(message){
        var level = this.levels[1];
        this.log(level, message);
    }

    , warning: function(message){
        var level = this.levels[2];
        this.log(level, message);
    }

    , error: function(message){
        var level = this.levels[3];
        this.log(level, message);
    }
}

var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// I need only the multiples of both 2 and 3
for(var i = 0; i<nums.length; i++){
    logger.debug("Current number:" + i);

    if(i%2 == 0 && i%3 == 0){
        logger.info("CORRECT NUMBER: " + i);
        continue;
    }

    else {
        if(i%2 == 0){
            logger.warning(i + " is a multiple of 2 but not a multiple of 3");
            continue;
        }
        if(i%3 == 0){
            logger.warning(i + " is a multiple of 3 but not a multiple of 2");
            continue;
        }
    }
}