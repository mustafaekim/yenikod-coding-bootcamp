/*
    Built-in objects:
        - String, Number, Boolean ==> Those are wrapper objects for primitive values
        - Object, Function, Array, RegEx ==> Those are objects having literal forms
        - Date, Error ==> Those are objects without any literal form (only constructed forms exist)
*/



/*
    RegEx literal: /pattern/modifiers;

    Pattern:
    [abc]	Find any of the characters between the brackets
    [0-9]	Find any of the digits between the brackets
    (x|y)	Find any of the alternatives separated with |
    \d	Find a digit
    \s	Find a whitespace character
    \b	Find a match at the beginning or at the end of a word
    n+	(1 or more) Matches any string that contains at least one n
    n*	(0 or more) Matches any string that contains zero or more occurrences of n
    n?	(0 or 1) Matches any string that contains zero or one occurrences of n

    Modifiers:
        -i	Perform case-insensitive matching
        -g	Perform a global match (find all matches rather than stopping after the first match)
        -m	Perform multiline matching
*/

// String.search and String.replace takes an argument of type RegEx object

var str = "Hello Mustafa, how are you today?";
var n = str.search(/mustafa/i); // pattern: mustafa, i: case-insensitive
console.log(
    "(1)"
    , n
);

n = str.search(new RegExp("mustafa", "i")); // pattern: mustafa, i: case-insensitive
console.log(
    "(2)"
    , n
);

n = str.search(/mustafa/); // pattern: mustafa
console.log(
    "(3)"
    , n
); // -1: not found

var modified = str.replace(/o/, "O"); // first match
console.log(
    "(4)"
    , modified
);

modified = str.replace(/o/g, "O"); // global match
console.log(
    "(5)"
    , modified
);

modified = "abcdefg".replace(/[a-c]/g, "x");
console.log(
    "(6)"
    , modified
);

// RegEx object's test and exec properties
console.log(
    "(7)",
    /[1-6]+0/.test("1, 2, 3, 4, 5, 6, 7, 8, 9"),
    /[1-6]+0/.test("1, 2, 3, 4, 5, 60, 70, 80, 90"),
    /[1-6]+0/.test("1, 2, 3, 4, 5, 6, 70, 80, 90")
);

console.log(
    "(8)",
    /[1-3]+[a-c]/.exec("Hi Mr. 32d, your previous code was 32b")
)

