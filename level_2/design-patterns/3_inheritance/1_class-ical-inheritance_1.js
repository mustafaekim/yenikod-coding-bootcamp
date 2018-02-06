/*
    Class-ical inheritance
        * Child.prototype = new Parent();


    Drawbacks 
        - The child.constructor references Parent
        - The constructor call "new Parent()" attaches some properties that may not make sense for the Child objects
            In this example, child1.__proto__.name exists but it does not make real sense
        - The real problem is that we cannot pass any arguments into "new Parent()"

    Short:
        Drawback 1: own properties added to `this` is inherited
        Drawback 2: it doesn't enable you to pass parameters to the child constructor

*/


/* Parent */

function Parent(name) {
    this.name = name || "Mustafa";
}

Parent.prototype.getName = function () {
    return this.name;
}


/* Child */

function Child() {
}
Child.prototype = new Parent();


/* Test */

var child1 = new Child();
console.log("(1)", child1.constructor == Parent); // -> true | aChild.__proto__ == Parent.prototype && Parent.prototype.constroctor == Parent
console.log("(2)", child1.getName() == "Mustafa") // -> true

child1.name = "Mahmut";
console.log("(3)", child1.hasOwnProperty("name")); 
console.log("(4)", child1.__proto__.name); // -> Mustafa



