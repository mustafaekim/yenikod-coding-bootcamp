/*
    -	Except undefined and null, all values are wrapped with the associated 
        (depending on the type of the value) object when a property accessor 
        operator (dot operator or bracket operator) is called on the value. 
    -	string value is wrapped by String object
    -	number value (first must be placed inside parenthesis) is wrapped by Number object
    -	boolean value is wrapped by Boolean object
    -	function value (first must be placed inside parenthesis) is wrapped by Function object
    -	Once the value is wrapped by an object, as a result, it can have properties. (and have acccess to the built-in properties)

    * null and undefined have no object wrapper form, hence trying to access it as if they are an object, throws Type Error

    Notes:
        - I omit the new operator, because we have not yet seen. What really happens is new Number(), new String(), new Boolean() ...
*/

console.log("Mustafa".length);
console.log(String("Mustafa").length);

console.log((1000).toString());
console.log(Number(1000).toString());

console.log(true.toString());
console.log(Boolean(true).toString());


console.log(
    (function add(x, y) {
        return x + y;
    }).toString()
);

console.log(
    Function("x", "y", "return x + y;")
    .toString()
);

console.log(
    (function add(x, y) {
        return x + y;
    }).name
);



