//
// hasPosition trait
//
const hasPosition = state => ({
    setPosition: function (x, y) {
        this.x = x;
        this.y = y;
    }.bind(state)
});

//
// hasRadius trait
//
const hasRadius = state => ({
    setRadius: function (r) {
        this.r = r;
    }.bind(state)
});

//
// isStringifyable trait
//
const isStringifyable = state => ({
    toString: function () {
        var txt = '\n';
        for (var i in this) {
            if (this.hasOwnProperty(i) && typeof this[i] !== 'function') {
                txt += '\t' + i + ': ' + this[i] + '\n';
            }
        }
        return txt + '\n';
    }.bind(state)
});

//
// Shape factory
//  has traits: hasPosition, isStringifyable
//
const createShape = (x, y) => {
    var shape = {};
    Object.assign(
        shape,
        hasPosition(shape),
        isStringifyable(shape)
    );
    shape.setPosition(x, y);
    return shape;
};

//
// Circle factory
//  has traits: hasPosition, hasRadius, isStringifyable
//
const createCircle = (x, y, r) => {
    var circle = {};
    Object.assign(
        circle,
        hasPosition(circle),
        hasRadius(circle),
        isStringifyable(circle)
    );
    circle.setPosition(x, y);
    circle.setRadius(r);
    return circle;
};

//
// Examples
//
var s1 = createShape(10, 20);      //=> { x: 10, y: 20 }
var s2 = createShape(50, 60);      //=> { x: 50, y: 60 }
s2.setPosition(30, 40);            //=> { x: 30, y: 40 }

var c1 = createCircle(20, 10, 30); //=> { x: 20, y: 10, r: 30 }
c1.setPosition(30, 40);            //=> { x: 30, y: 40, r: 30 }
c1.setRadius(80);                  //=> { x: 30, y: 40, r: 80 }