/*
    Array.prototype.slice

        The slice() method returns a shallow copy of a portion of an array into a new array object 
            selected from begin to end (end not included). 
            The original array will not be modified.

        arr.slice()
        arr.slice(begin)
        arr.slice(begin, end)

        - begin: Zero-based index at which to begin extraction.
        - end: Zero-based index before which to end extraction
*/

var shallowCopy = fruits.slice();