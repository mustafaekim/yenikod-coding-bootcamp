var arr = [];
for (var i = 0; i < 5; i++) {
    arr[i] = function () { return i };
}
//console.log(arr);
console.log(arr[0]());

for (var c = 0; c < 5; c++) {
    console.log(arr[c].toString());
}



// arr = [
//   function(){return i},
//   function(){return i},
//   function(){return i},
//   function(){return i},
//   function(){return i}
// ];