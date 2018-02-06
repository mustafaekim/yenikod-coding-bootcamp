/*
    Create a singleton which
        * takes an ID as an argument and
            - either returns a new user having the given ID as a property
            - or (if exists) returns the existing user
*/

var User /* =...; */

var mustafa = User(1); // create a new object: { id: 1 }
var talip = User(2); // creates a new object: { id: 2 }
var refMustafa = User(1) // returns the same object: { id: 1 }
var refTalip = User(2) // returns the same objectt: { id: 2 }