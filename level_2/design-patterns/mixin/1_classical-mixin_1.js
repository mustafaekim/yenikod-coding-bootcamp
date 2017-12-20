/*
    A mixin is a class that defines a set of functions relating to a type (e.g. Person, Circle, Observer). 
    Mixins classes are usually considered abstract in that they will not themselves be instantiated,
        instead their functions are copied (or ‘borrowed’) by concrete classes
             as a means of ‘inheriting’ behaviour without entering into a formal relationship with the behaviour provider.
*/

var circleFns = {
    area: function () {
        return Math.PI * this.radius * this.radius;
    },
    grow: function () {
        this.radius++;
    },
    shrink: function () {
        this.radius--;
    }
};

var shape = Object.assign({}, circleFns, { radius: 5 });
console.log(shape.area());