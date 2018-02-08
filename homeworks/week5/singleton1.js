/*
    Lazy Element Repository:
        Create a singleton, which lazy-loads elements by ID.
        While creating the singleton, pass the finder function (for instance: document.getElementById)
            => so that we can test this function outside of browser environment
*/


function myFinder(id) {
    return ({
        "el_id_1": { gar: "el_id_1" }
    })[id];
}

var lazyDOM = (function (finder) {

    var cache = {};


    return {
        getElement: function (id) {
            if (!cache[id]) {
                console.log("Caching ", id);
                cache[id] = finder(id);
            }

            return cache[id];
        }
    }

})(myFinder /* document.getElementById.bind(document) */);

var el1 = lazyDOM.getElement("el_id_1");
var el2 = lazyDOM.getElement("el_id_1");
var el3 = lazyDOM.getElement("el_id_2");

console.log(el1);
console.log(el3)

console.log(el1 === el2);


//lazyDOM.getElement("el_id_1"); // will find the element by id, and cache the result
//lazyDOM.getElement("el_id_1"); // will return from cache (will not run document.getElementById again!)


