/*
    Add the functions below to the Hero
        - kicked: which lowers the power by -15 and notify subscribers
        - insulted: which lowers the power by -5 and notift subscribers
    
        Update the subscription system so that subscribers will tell the subject which actions they are interested so that
        they will be only notified when those kind of events occur
*/

function Hero() {

    this.topics = {};

    this.subscribe = function (eventName, callback) {
        if (!this.topics[eventName])
            this.topics[eventName] = [];
        this.topics[eventName].push(callback); // does not check if callback already exists
    }

    this.unsubscribe = function (any) {
        // TODO
    }

    this.notify = function (eventName, eventData) {
        var callbacks = this.topics[eventName];
        if (callbacks) {
            callbacks.forEach(function (callback) {
                callback(eventName, eventData);
            })
        }

    }

    this.power = 100;

    this.slapped = function () {
        this.power -= 10;
        this.notify("slapped", -10);
    }

    this.kicked = function () {
        this.power -= 15;
        this.notify("kicked", -15);
    }
}

/* */
var adrean = new Hero();

adrean.subscribe("slapped", function (eventName, eventData) {
    console.log("Oh! I am slapped! My health is decreased by " + eventData)
})

adrean.subscribe("kicked", function (eventName, eventData) {
    console.log("Oh! I am kicked! My health is decreased by " + eventData)
})


//console.log(adrean.topics);

adrean.slapped();
adrean.slapped();
adrean.slapped();

adrean.kicked();


