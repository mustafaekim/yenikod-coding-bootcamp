/* Title: Self-defining functions
 Description: self-overwrite with new bodies to do less work from the second invocation and after
 */
var scareMe = function () {
    alert("Boo!");
    scareMe = function () {
        alert("Double boo!");
    };
};

// 1. adding a new property
scareMe.property = "properly";
// 2. assigning to a different name
var prank = scareMe;
// 3. using as a method
var spooky = {
    boo: scareMe
};


// calling with a new name
prank(); // "Boo!"
prank(); // "Boo!"
console.log(prank.property); // "properly"
// calling as a method
spooky.boo(); // "Boo!"
spooky.boo(); // "Boo!"
console.log(spooky.boo.property); // "properly"
// using the self-defined function
scareMe(); // Double boo!
scareMe(); // Double boo!
console.log(scareMe.property); // undefined