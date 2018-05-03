// don't use for-in statement for iterating array elements, you can accidentaly observe properties!
var colors = ["black", "white"];
colors.favorite = "blue"
for(var key in colors){
    console.log(colors[key]);
}