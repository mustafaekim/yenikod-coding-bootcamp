/* Fraud Detector */ 
function FraudDetector(){
    this.name = "Fraud Detector"; // <- I've added a name so that it becomes easier to implement subscribe/unsubscribe
    this.control = function(item){
        if(item.name == "banana") console.log("Alert! Someone is going on with banana!")
    }

    this.getNotified = function(item){ // <- a common method for all subscribers
        this.control(item);
    }
}

/* Recommender */
function Recommender(){
    this.name = "Recommender"; // <- I've added a name so that it becomes easier to implement subscribe/unsubscribe
    this.process = function(item){
        if(item.name == "orange") console.log("Recommend lemon!");
    }

    this.getNotified = function(item){ // <- a common method for all subscribers
        this.process(item);
    }
}



/* Item */

function Item(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

/* Shoping Cart */

function ShoppingCart() {
    this.subscribers = [];
    this.items = [];
}

/* Subject Functions */
ShoppingCart.prototype.subscribe = function(newSubscriber){
    this.subscribers.push(newSubscriber);
}

ShoppingCart.prototype.unsubscribe = function(existingSubscriber){
    this.subscribers = this.subscribers.filter(function(subscriber){
        return existingSubscriber.name != subscriber.name;
    })
}

ShoppingCart.prototype.notify = function(item){
    this.subscribers.forEach(function(subscriber){
        subscriber.getNotified(item)
    })
}

/* Other Shopping Cart Function */

ShoppingCart.prototype.find = function(itemName){
    return this.items.filter(function(item){
        return item.name == itemName
    })[0];
}

ShoppingCart.prototype.add = function (itemToAdd) {
    this.items.push(itemToAdd);

    /* Let's notify others */
    this.notify(itemToAdd); // <- we notify subscribers
}

ShoppingCart.prototype.remove = function (itemToRemove) {
    var itemToBeRemoved = this.find(itemToRemove);

    this.items = this.items.filter(function (item) {
        return item.name != itemToRemove.name;
    });
    this.notify(itemToBeRemoved); // <- we notify subscribers
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
    this.shoppingCart = new ShoppingCart(); // <- We dont depend on any other objects anymore
}

/* Init 1 */

var user1 = new User("Mustafa");

user1.shoppingCart.subscribe(new Recommender());
user1.shoppingCart.subscribe(new FraudDetector());

user1.shoppingCart.add(new Item("apple", 2, 10));
user1.shoppingCart.add(new Item("orange", 3, 5));
user1.shoppingCart.add(new Item("banana", 12, 7));

user1.shoppingCart.remove("banana");



/* */
user1.shoppingCart.listItems();
console.log(user1.shoppingCart.calculateSubTotal());
