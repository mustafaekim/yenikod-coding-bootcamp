/* Fraud Detector */ 
function FraudDetector(){
    this.control = function(item){
        if(item.name == "banana") console.log("Alert! Someone is going on with banana!")
    }
}

/* Recommender */
function Recommender(){
    this.process = function(item){
        if(item.name == "orange") console.log("Recommend lemon!");
    }
}



/* Item */

function Item(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

/* Shoping Cart */

function ShoppingCart(fraudDetector, recommender) { // <- new parameters
    this.items = [];

    this.fraudDetector = fraudDetector;
    this.recommender = recommender;
}

ShoppingCart.prototype.find = function(itemName){
    return this.items.filter(function(item){
        return item.name == itemName
    })[0];
}

ShoppingCart.prototype.add = function (itemToAdd) {
    this.items.push(itemToAdd);

    /* Let's notify others */
    this.fraudDetector.control(itemToAdd); // <- one line for each department to be notified
    this.recommender.process(itemToAdd);
}

ShoppingCart.prototype.remove = function (itemName) {
    var itemToBeRemoved = this.find(itemName);

    this.items = this.items.filter(function (item) {
        return item.name != itemName;
    });

    this.fraudDetector.control(itemToBeRemoved); // <- one line for each department to be notified
    this.recommender.process(itemToBeRemoved); 
}

ShoppingCart.prototype.calculateSubTotal = function () {
    var total = 0;
    this.items.forEach(function (item) {
        total += item.quantity * item.price
    })
    return total;
}

ShoppingCart.prototype.listItems = function(){
    this.items.forEach(function(item){
        console.log(item.name, "x", item.quantity, "=>", item.quantity * item.price);
    })
}



/* User */

function User(name) {
    this.name = name;
    this.shoppingCart = new ShoppingCart(new FraudDetector(), new Recommender()); // <- We are passing new fraud detector and recommender
}

/* Init 1 */

var user1 = new User("Mustafa");
user1.shoppingCart.add(new Item("apple", 2, 10));
user1.shoppingCart.add(new Item("orange", 3, 5));
user1.shoppingCart.add(new Item("banana", 12, 7));

user1.shoppingCart.remove("banana");



/* */
user1.shoppingCart.listItems();
console.log(user1.shoppingCart.calculateSubTotal());
