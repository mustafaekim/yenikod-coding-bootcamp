/*
    In this style, we add a NEW function object into the object passed through this
    In the previous style, we had only ONE object with several properties holding function values, and we were assigning references to those functions.
*/

var asCircle = function () {
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    this.grow = function () {
        this.radius++;
    };
    this.shrink = function () {
        this.radius--;
    };
    return this;
};

var Circle = function (radius) {
    this.radius = radius;
};
asCircle.call(Circle.prototype);

var circle1 = new Circle(5);
circle1.area(); //78.54