// We have already seen that "a" (a string literal) represents a string value
// and 1 (a number literal) represents a number value

// There are 2 statements below, first is a string literal and the second is a number literal
// Still our code does not do anything with these values
// Normally, each statement should be ended with a semicolon (;) 
    // however even if it does not, JavaSript can understand our intention in most cases and fix the code by putting semicolons at the end of statements
"a"
1

// After the compilation, the code can be taught to become like the code below (without comment tags: //) :
    // "a";
    // 1;

// I highly recommend putting semicolons at the end of each statement intentionally
// JavaScript interpreter will execute our code statement by statement
// A JavaScript program is a series of statements and semicolons separate JavaScript statements.