// Functions are the only things that create a new scope.
// Function creates a new scope everytime it is called
// Everytime a function is called, local variables are re created
// The set of variables visible inside a function is determined 
//   by the place of that function in the program text. (lexical scoping)

/*
var x = "outside";

var f1 = function() {
  var x = "inside f1";
};
f1();
console.log(x);
*/

/*
var x = "outside";
var f2 = function () {
  x = "inside f2";
};
f2();
console.log(x);
*/

