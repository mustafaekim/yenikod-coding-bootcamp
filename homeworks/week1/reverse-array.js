/* 
    declare the functions reverseArray and reverseArrayInPlace
    reverse array returns a new array
    reverseArrayInPlace mutates the array given as a parameter
*/

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]