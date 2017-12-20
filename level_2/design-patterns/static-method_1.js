/* Title: Public and Private Static Members
			 Description:
			 Public Static Members - accessible outside the constructor
			 Private Static Members - shared by all the objects with the same constructor function and not accessible outside the constructor
			 */
// Public Static Members
// constructor
var Gadget = function () {
};
// a static method
Gadget.isShiny = function () {
    return "you bet";
};
// a normal method added to the prototype
Gadget.prototype.setPrice = function (price) {
    this.price = price;
};
// calling a static method
console.log(Gadget.isShiny()); // "you bet"
// creating an instance and calling a method
var iphone = new Gadget();
iphone.setPrice(500);
console.log(typeof Gadget.setPrice); // "undefined"
console.log(typeof iphone.isShiny); // "undefined"
