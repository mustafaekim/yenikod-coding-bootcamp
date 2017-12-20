/*
    Command pattern creates objects which encapsulate actions and parameters
        The command pattern aims to encapsulate method invocation.
        It enables you to decouple objects invoking the action from the objects which implemented them

        Imagine if core API behind the CarManager changed. 
            If command pattern has not been used, this would require all objects directly accessing these methods within our application to also be modified
*/

var CarManager = {
    /* request information */
    requestInfo: function (model, id) {
        return 'The purchase info for ' + model + ' with ID ' + id + ' is being processed...';
    },
    /* purchase the car */
    buyVehicle: function (model, id) {
        return 'You have successfully purchased Item ' + id + ', a ' + model + '.';
    }
};
CarManager.execute = function (commad) {
    // this implementation can change.
    // it can have some checks, validations, filters before executing the functions.
    // even if the internal function names change, the command can be kept the same object

    // for this short demo, I directly call the function having the same name with the value of command.request 
    // But that should not be always the case, as I explained above.
    return CarManager[commad.request](commad.model, commad.carID);
};

var actionA = CarManager.execute({ request: 'requestInfo', model: 'Ford Mondeo', carID: '543434' });
console.log(actionA);
var actionB = CarManager.execute({ request: 'buyVehicle', model: 'Ford Mondeo', carID: '543434' });
console.log(actionB);