/*
    The process object is a global that provides information about, and control over, the current Node.js process. 
    As a global, it is always available to Node.js applications without using require().

        The 'beforeExit' event 
            - is emitted when Node.js empties its event loop and has no additional work to schedule. 
            - is not emitted for conditions causing explicit termination, such as calling process.exit() or uncaught exceptions.

        The 'exit' event 
            - is emitted when the Node.js process is about to exit as a result of either:
                - The process.exit() method being called explicitly;
                - The Node.js event loop no longer having any additional work to perform.
                - There is no way to prevent the exiting of the event loop at this point, and once all 'exit' listeners have finished running the Node.js process will terminate.
                    - Hence, listener functions must only perform synchronous operations.

        Both 'exit' and 'beforeExit' events are not emitted in case there is an unhandled exception

        The 'uncaughtException' event
            - is emitted when an uncaught JavaScript exception bubbles all the way back to the event loop. 
            - By default, Node.js handles such exceptions by printing the stack trace to stderr and exiting. 
            - Adding a handler for the 'uncaughtException' event overrides this default behavior.
            - Note that 'uncaughtException' is a crude mechanism for exception handling intended to be used only as a last resort

    exitCode:
        * 0: success
*/

function catchExceptions() {
    process.on("uncaughtException", function (e) {
        console.log("=^==^==^==^==^==^==^==^==^==^==^=")
        console.log("Hey, pay attention to your code!");
        console.log(e);
        console.log("=================================")
    })
}




process.on("beforeExit", function (exitCode) {
    console.log("Exiting program", exitCode);
})

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

//catchExceptions(); // Let's handle exceptions so that we can exit under control
//a; // Error!

// process.exit(); // If I call process.exit explicitly, beforeExit event is not emitted. Only exit event is emitted.


