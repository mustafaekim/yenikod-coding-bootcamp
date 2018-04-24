/* Know that */
console.log("Mustafa"[1] == "u")
console.log("Mustafa".length == 7)

/*
    => Write a function that checks two given numbers and return true if one of the number is 50 or if their sum is 50
    function fn(number_1, number_2){
        ..
    }

    => Write a function that checks a given integer is within 20 of 100 or 400.
    function fn(num){
        ..
    }

    => Write a function that checks two given integers, if one is positive and one is negative, returns true
    function fn(num1, num2){
        ..
    }

    => Write a function that returns whether the given number is between 4 and 40 (inclusive)
    function fn(num){
        ..
    }

    => Write a function that returns whether all the given numbers are between 4 and 40 (exclusive)
    function fn(){
        ..
    }
    => fn(4,5,10,45,90) should return false

    => Write a function that finds the largest of three given integers
    function max(num1, num2, num3){
        ..
    }
    max(1, 5, 9) should return 9

    => Write a function that finds the largest of the given integers
    function max(){
        ..
    }    
    max(123, 321, 22, 223, 2, 0, 999) should return 999

    => Write a function that finds the average of the numbers given
    function avg(){
        ..
    }
    avg(1,2,3) should return 2

    => Write a function that finds the nearest number to 100 among the given numbers
    function nearest_to_100(){
        ..
    }
    neearest_to_100(1, 89, 89, 101, 98) should return 101

    => Write a function that checks if two numbers are in range 40..60 or in the range 70..100 inclusive
    function check(num1, num2){
        ..
    }

    => Write a function that checks whether any 2 of the numbers given are equal
    function any_equal(){
        ..
    }
    any_equal(2, 3, 6, 9, 3, 1, 0) should return true

    => Write a function that checks whetner the given numbers are in increasing order
    function control_order(){
        ..
    }
    function control_order(1, 4, 9, 11) should return true

    => Write a function that returns how many of the arguments are pair numbers
    function count_pairs(){
        ..
    }
    function count_pairs(1, 4, 9, 10) should return 2

    => Write a function that returns true if any 2 of given numbers' total is 100
    function total_100(){
        ..
    }
    total_100(12, 49, 51, 11) should return true


    => Write a function that converts the given number (in seconds) to to hours and minutes
    function hours_and_minutes(seconds){
        ..
    }
    hours_and_minutes(1000) should return ?

*/


/*
    Write a function that counts how many times a char exists within the given text
    function count(text, char){
        ..
    }
    count("Mustafa", "a") should return 2

*/

/*
    Write a function that returns true if a given string contains equal number of p's and t's. 
    function fn(text){
        ..
    }
    fn("papatata") should return true
*/

/*
    Write a function that extract the first half of a string of even length. 
    function half(text){
        ..
    }
    half("Mustafa") should return "Must"
*/


/* 
    Write a function that concatenates two strings except their first character.
    function concat(text1, text2){
        ..
    }
    concat("Mustafa", "Ekim") should return "ustafakim"
*/



/*
    Write a function to check if a string starts with 'Java' and false otherwise
    function starts_with_java(text){
        ..
    }
    starts_with_java("JavaScript") should return true
    starts_with_java("El mundo del carnaval") shoul return false
*/


/*
    function starts_with(text, start){
        ..
    }
    start_with("JavaScript", "Java") should return true
*/


/*
    function reverse(a_string){
        ..
    }

    reverse("Mustafa") should return "afatsuM"
*/


/*
    function ends_with(text){
        ..
    }
    ends_with("Java", "va") should return true
*/


/*
    function short(a_string, limit_of_characters){
        ..
    }

    short("Once upon a time there was a village", 5) should return "Once ..."
*/


/*
    function get_extension(filename){
        ..
    }
    get_extension("hello.js") should return "js"
*/


/*
    function beginning_of(text, num){
        ..
    }
    beginning_of("Mustafa", 4) should return "Must"
*/


/*
    function endOf(text, num){
        ..
    }
    end_of("Mustafa", 3) should return "afa"
*/


/*
    function replace(text, char1, char2){
        ..
    }
    replace("Mustafa", "a", "*") should return "Must*f*"

    BONUS: can you make the function work even when char1 and char2 are not single chars but strings?
    replace("My name is Jereme, what is your name?", "me", "--") should return "My na-- is Jere--, what is your na--?"
*/


/*
    function fn(text){
        ..
    }
    fn("Mustafa") should return "austafM"
*/

console.log("M" == "m".toUpperCase());
/*
    Write a function to capitalize the first letter of each word of a given string
    function capitalize(text){
        ..
    }
    capitalize("I feel super today") should return "I Feel Super Today"
*/