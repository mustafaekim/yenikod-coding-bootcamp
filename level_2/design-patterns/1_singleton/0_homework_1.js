/*
    Lazy Element Repository:
        Create a singleton, which lazy-loads elements by ID.
        While creating the singleton, pass the finder function (for instance: document.getElementById)
            => so that we can test this function outside of browser environment
*/

var lazyDOM = (function(finder){
    /*
        ...
    */
})(document.getElementById);


lazyDOM.get("el_id_1"); // will find the element by id, and cache the result
lazyDOM.get("el_id_1"); // will return from cache (will not run document.getElementById again!)

