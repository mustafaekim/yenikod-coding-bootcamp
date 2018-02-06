var MyObject = (function () {
    // Note that this variable can be closured with the 'instance' and prototype methods below
    var outerScope = function(){};

    // This function will ultimately be the "constructor" for your object
    function MyObject() {
        var privateVariable = 1; // both of these private vars are really closures specific to each instance
        var privateFunction = function(){};
        this.PublicProtectedFunction = function(){ };
    }

    // "Static" like properties/functions, not specific to each instance but not a prototype either
    MyObject.Count = 0;

    // Prototype declarations
    MyObject.prototype.someFunction = function () { };
    MyObject.prototype.someValue = 1;

    return MyObject;
})(); 

// note we do automatic evalution of this function, which means the 'instance' and prototype definitions 
// will only be evaluated/defined once.  Now, everytime we do the following, we get a new instance
// as defined by the 'function MyObject' definition inside

var test = new MyObject();