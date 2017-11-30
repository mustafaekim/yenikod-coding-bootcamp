// throwing an Error object is favored

try {
    throw new TypeError("I dont like your type!")
    console.log("I am not executed!")
}
catch (e) {
    console.log(e);
    console.log("Program continues");
}
console.log("and continues...");