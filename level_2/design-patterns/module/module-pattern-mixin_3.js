
var basket = {}

var basketManager = (function (basket, logger) {

    basket.items = [];

    // private attachment
    var taxRate = 0.18;

    return {
        add: function (name, price, quantity) {
            if (name && price && quantity) {
                basket.items.push({ name: name, price: price, quantity: quantity })
                logger("New item is added to the basket:", quantity, " x ", name)
            };
        }
        , getTotal: function () {
            var total = 0;
            for (var i = 0; i < basket.items.length; i++) {
                total += basket.items[i].price * basket.items[i].quantity * (1 + taxRate);
            }
            return total;
        }
    };

})(basket, console.log);

basketManager.add("Apple (kg)", 15, 2);
basketManager.add("Milkshake", 22, 3);

console.log(basket);
console.log(basketManager);
console.log(basketManager.getTotal());
