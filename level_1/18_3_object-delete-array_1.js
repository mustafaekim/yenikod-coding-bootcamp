var colors = ["blue", "black", "white"];

delete colors[1];

console.log("(1)", colors.length); // -> still 3

for (var i = 0; i < colors.length; i++) {
    console.log("(2)", colors[i]); // -> colors[1] returns undefined
}

for(var k in colors){
    console.log("(3)", colors[k]); // -> colors[1] does not exist, it skips
}

console.log("(4)", colors) // -> [ 'blue', , 'white' ]

console.log("(5)", 0 in colors, 1 in colors, 2 in colors); // -> true, false, true

// resetting element 1
colors[1] = "red";
console.log("(6)", colors);