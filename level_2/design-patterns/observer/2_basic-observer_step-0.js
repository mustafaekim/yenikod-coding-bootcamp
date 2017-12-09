/*
    Define a one-to-many dependency between objects 
        so that when one object changes state, all its dependents are notified and updated automatically.

        Objects subscribe to an event and get notified when the event occurs. 
        This pattern is the cornerstone of event driven programming.
        The Observer pattern promotes loose coupling.

        Event handlers are functions that will be notified when a certain event fires. 
        These notifications optionally receive an event argument with details about the event.

        1 Subject -> Many Observers
            Subject: subscribe, unsubscribe, notify

        aka. 
            - Publisher/Subscribers (Pub/Sub)
            - Event Dispatcher/Listeners
            - Custom Events
*/

/* Item */

function Item(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

/* Shoping Cart */

function ShoppingCart() {
    this.items = [];
}

ShoppingCart.prototype.add = function (item) {
    this.items.push(item);
}

ShoppingCart.prototype.remove = function (itemName) {
    this.items = this.items.filter(function (item) {
        return item.name != itemName;
    });
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
    this.shoppingCart = new ShoppingCart();
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
