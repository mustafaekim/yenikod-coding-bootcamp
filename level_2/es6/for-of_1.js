/*
  The for...of statement creates a loop iterating over iterable objects 
    (including Array, Map, Set, String, TypedArray, arguments object and so on)
  
  for..in returns a list of keys on the object being iterated, 
    whereas for..of returns a list of values of the numeric properties of the object being iterated.
*/

Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7 but NOT foo
}