/*
    1-) For now, our observers (subscribers) are subscribed to all kind of events (add or remove item) that occur on Shopping Cart.
    I want you to change the subscription system so that subscribers will be notified for the events they are interested: add, remove
    To do this, while subscribing, they will also tell the Subject which events they are interested by passing an array of strings
        Example: 
            - user1.shoppingCart.subscribe(["add"], new Recommender()); // Recommender is only interested in add events
            - user1.shoppingCart.subscribe(["add", "remove"], new FraudDetector()); // FraudDetector is interested in both add and remove events

    2-) For now, our observers are notified by passing an item object which does not hold any information about the event type: add or remove
    I want you to change the subscription system so that when subscribers get notified, an item container object will be passed, so that
    they can figure out what's going on. Example:
    {
        eventName: ...,
        item: ...
    }
*/
