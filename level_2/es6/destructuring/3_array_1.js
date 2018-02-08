var colors = ["red", "black", "green", "blue"];

var [red, black, green] = colors;

console.log(red, black, green);


colors.push(["lightgreen", "lightblue"]);

var blue, lightgreen, lightblue;
[red, black, green, blue, [lightgreen, lightblue]] = colors;
console.log(red, black, green, blue, lightblue, lightgreen);