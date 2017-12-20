/*
    In this style (function and cached mixin) we create area, grow and shrink function values ONCE, and then assigning references to objects passed
    in (through this)
 */

var asRectangle = (function () {
    function area() {
        return this.length * this.width;
    }
    function grow() {
        this.length++ , this.width++;
    }
    function shrink() {
        this.length-- , this.width--;
    }
    return function () {
        this.area = area;
        this.grow = grow;
        this.shrink = shrink;
        return this;
    };
})();

var RectangularButton = function (length, width, label, action) {
    this.length = length;
    this.width = width;
    this.label = label;
    this.action = action;
}

asRectangle.call(RectangularButton.prototype);

var btn = new RectangularButton(10, 2, "Bom", null);
console.log(btn.area());

btn.grow();
console.log(btn.area());
