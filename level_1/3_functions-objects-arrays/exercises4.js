var cart = [];
cart.push({ name: "a4 kağıt", category: "office", unit_price: 4, quantity: 5, discount_rate: 0.1 });
cart.push({ name: "broşür", category: "print", unit_price: 15, quantity: 2, discount_rate: 0 });
cart.push({ name: "kart vizit", category: "print", unit_price: 10, quantity: 1, discount_rate: 0.1 });
cart.push({ name: "el ilanı", category: "print", unit_price: 12, quantity: 2, discount_rate: 0 });
cart.push({ name: "kartuş", category: "office", unit_price: 64, quantity: 2, discount_rate: 0.05 });

function calculateCartTotal(cart) {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += (cart[i].unit_price * cart[i].quantity) * (1 - cart[i].discount_rate);
    }

    return total;
}
//console.log(calculateCartTotal(cart));

function calculateTotalDiscountApplied(cart) {
    var total_discount = 0;
    for (var i = 0; i < cart.length; i++) {
        total_discount += (cart[i].unit_price * cart[i].quantity * cart[i].discount_rate)
    }

    return total_discount;
}
//console.log(calculateTotalDiscountApplied(cart));

function calculateCartItemTotal(item) {
    return item.quantity * item.unit_price * (1 - item.discount_rate);
}

function calculateCartItemDiscount(item) {
    return item.quantity * item.unit_price * item.discount_rate;
}

function buildCartResume(cart) {
    var resume = {};
    var categories = {};

    var total = 0, discount = 0;

    for (var i = 0; i < cart.length; i++) {
        // calculate cart total
        total += calculateCartItemTotal(cart[i]);

        // calculate discount total
        discount += calculateCartItemDiscount(cart[i]);



        // calculate total by categories
        if (!categories[cart[i].category]) {
            categories[cart[i].category] = 0;
        }
        categories[cart[i].category] += calculateCartItemTotal(cart[i]);
    }

    resume.categories = categories;
    resume.total = total;
    resume.discount_applied = discount;

    return resume;
}

//console.log(buildCartResume(cart));

/* => {
    total: 150
    discount_applied: 35
    categories:{
        "office": 110
        , "print": 40
    }
}
*/

function add() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i].price * arguments[i].quantity
    }
    return total
}

// console.log(
//     add(
//         { price: 3, quantity: 5 }
//         , { price: 5, quantity: 2 }
//         , { price:2, quantity: 6}
//     ) == 37
// );