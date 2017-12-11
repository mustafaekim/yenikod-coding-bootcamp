/*
    Prefer primitives to Object wrappers
        - typeof
        - ==
*/

var mustafa1 = new String("Mustafa");
var mustafa2 = new String("Mustafa");
var mustafa3 = "Mustafa";
var mustafa4 = "Mustafa";

// typeof
console.log("(1)", typeof mustafa1) // -> object. Is that what you want??
console.log("(2)", typeof mustafa3) // -> string. That's better

// equality
console.log("(3)", mustafa1 == mustafa2) // -> false. Is that what you want??
console.log("(4)", mustafa1 === mustafa2) // -> false. Is that what you want??

console.log("(5)", mustafa1 == mustafa3) // -> true. Oh, implicit coercion! Here, it makes me confused.
console.log("(6)", mustafa1 != mustafa2, mustafa1 == mustafa3, mustafa2 == mustafa3); // -> true true true! That looks weird!
console.log("(7)", mustafa1 === mustafa3, mustafa2 === mustafa3); // -> false false! Without implicit coercion, it became clear again.

console.log("(8)", mustafa3 == mustafa4) // -> true. That sounds better.
console.log("(9)", mustafa3 === mustafa4) // -> true. That sounds better.




