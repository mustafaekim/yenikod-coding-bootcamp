var pubsub = (function () {

    var events = {};

    function on(eventName, fn) {
        events[eventName] = events[eventName] || [];
        events[eventName].push(fn);
    }

    function off(eventName, fn) {
        if (events[eventName]) {
            for (var i = 0; i < events[eventName].length; i++) {
                if (events[eventName][i] === fn) {
                    events[eventName].splice(i, 1);
                    break;
                }
            }
        }
    }

    function emit(eventName, data) {
        if (events[eventName]) {
            events[eventName].forEach(function (fn) {
                fn(eventName, data);
            });
        }
    }

    return {
        on: on,
        off: off,
        emit: emit
    };

})();


var user = { name: "Mustafa" }

pubsub.on("bar", function (eventName, data) {
    console.log("bar:", user.name, data)
});

pubsub.on("zar", function (eventName, data) {
    console.log("zar:", user.name, data)
});


pubsub.emit("bar", "bar event's data")
pubsub.emit("bar", "bar event's data")
pubsub.emit("zar", "zar event's data")