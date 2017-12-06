// Constructor is not always the function (which returns you an object) that you call,
// but the function that really creates the object is the constructor

console.log("(1)", "new Object() --> Who constructed me? -->", new Object().constructor);
console.log("(2)", "new Object(1) --> Who constructed me? -->", new Object(1).constructor);
console.log("(3)", "new Object('Hello World') --> Who constructed me? -->", new Object("Hello World").constructor);
console.log("(4)", "new Object(true) --> Who constructed me? -->", new Object(true).constructor);

console.log("(5)", "new Object(null) --> Who constructed me? -->", new Object(null).constructor);
console.log("(6)", "new Object(undefined) --> Who constructed me? -->", new Object(undefined).constructor);

console.log("(7)", "new Object({firstName: 'Mustafa'}) --> Who constructed me? -->", new Object({firstName: "Mustafa"}).constructor);

// Example 1
function User(){
    this.name = "Mustafa"
}

var me = new User(); // or User.call({})
console.log("(8)", "new User() --> Who constructed me? -->", me.constructor);


// Example 2
function Car(){
    return {
        name: "Ferrar"
    }
}
var myCar = new Car();
console.log("(9)", "new Car() --> Who constructed me? -->", myCar.constructor);


// Example 3
function Home(){
    return new User();
}
var myHome = new Home();
console.log("(10)", "new Home() --> Who constructed me? -->", myHome.constructor);

// Example 4
function Plane(){
    this.name = "Boing";
    return this;
}
var myPlane = new Plane();
console.log("(10)", "new Plane() --> Who constructed me? -->", myPlane.constructor);

/*
    Re-cap: 
        A function becomes a constructor if it is called with new operator and it returns this newly created object through the new operator (passed into the function through this)
        If a function is called with new operator but overwrites the object that it retuns by using a return statement it is not the constructor of the object it returns anymore.
            -Only exception is, when the function "return this". Because here this refers to newly created object, hence it still returns the newly created object

*/