// "var" is a special keyword that starts a "variable statement"
// Variable statement declares a variable
// Whatever comes just after "var" keyword is the name of the variable declared
// Below we declare a variable and we name it: myFirstVariable

/*
    When we find a name for a variable, we should consider the rules below:
    The general rules for constructing names for variables (unique identifiers) are:
        * Names can contain letters, digits, underscores, and dollar signs.
        * Names can begin with a letter
        * Names can also begin with $ and _
        * Names are case sensitive (y and Y are different variables)
        * Reserved words (like JavaScript keywords) cannot be used as names
*/

// Note that because "variable statement" is a statement, we make it explicit by putting semicolon at the end of the statement
var myFirstVariable;

// below are some other valid variable statements:
var address1;
var first_name;
var amount$;
var $amount;
var _my_first_home;

// When naming your variables, it is good to follow a convention
// Following a convention 
    // makes the code easier to read 
    // helps you remember the way you declared a variable at the first place ("Was it firstName, first_name or firstname?")
// When developing a software as a team, team should decide on the convention to be followed

// I personally prefer "Camel Case" naming convention
    // Camel Case: The first letter of an identifier is lowercase and the first letter of each subsequent concatenated word is capitalized. For example: backColor, firstName

// Naming conventions can be extended by other naming conventions. Personally I
    // use words that have a meaning in English
    // choose descriptive words (words that express the value to be assigned inside the variable)
    // put an underscore if the variable is private (something you don't know yet)
    // ...