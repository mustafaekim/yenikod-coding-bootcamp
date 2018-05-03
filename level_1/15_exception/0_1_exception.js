// throwing an Error object is favored

try {
    console.log(name == undefined); // hoisting
    throw new TypeError("I dont like your type!")
    console.log("I am not executed!")
}
catch (e) { // parameters are block scope! That's the only exception
    console.log(e);
    console.log("Program continues");
    var name = "Mustafa"
}
console.log("and continues...");


try{
    console.log(name); // I can reach name
    console.log(e); // I cannot reach e
}
catch(e){
    console.log("Parameters of catch are block scoped!")
}