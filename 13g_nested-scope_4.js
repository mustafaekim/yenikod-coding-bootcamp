/*
for(var i = 0; i < 10; i += 1){    
}

console.log("What is 'i'? " + i);
*/


//console.log(function (){})
//console.log([function hi1(){}, function hi2(){}]);


/*
var arr = [];
for(var i=0; i<5; i++){
  arr[i] = function(){return i};

  // arr = [
  //   function(){return i},
  //   function(){return i},
  //   function(){return i},
  //   function(){return i},
  //   function(){return i}
  // ];
}
console.log(arr);
console.log(arr[0]());

for(var c = 0; c<5; c++){
  console.log(arr[c].toString());
}
*/

/*
var arr = [];
for(var i=0; i<5; i++){
  arr[i] = {
    order: i
  }
}
console.log(arr);
*/

/*
var funcs = [];
for (var i = 0; i < 3; i++) {      // let's create 3 functions
  funcs[i] = function() {          // and store them in funcs
     // each should log its value.
     console.log("My value: " + i);
  };
  // console.log("My value: " + i);
}
// console.log("My value: " + i);

for (var j = 0; j < 3; j++) {
  funcs[j]();                      // and now let's run each one to see
}
*/


/*
var funcs = [];

function createfunc(i) {
    return function() { console.log("My value: " + i); };
}

for (var i = 0; i < 3; i++) {
    funcs[i] = createfunc(i);
}

for (var j = 0; j < 3; j++) {
    funcs[j]();                        // and now let's run each one to see
}
*/
