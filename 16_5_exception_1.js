/*
    try...catch
    try...finally
    try...catch...finally


*/

try {
    throw 'myException'; // generates an exception

    /*
        You can throw any value
            throw 'Error2';   // String type
            throw 42;         // Number type
            throw true;       // Boolean type
            throw {toString: function() { return "I'm an object!"; } };
    */
 }
 catch (e) {
    // statements to handle any exceptions
    console.log(e); // pass exception object to error handler
}