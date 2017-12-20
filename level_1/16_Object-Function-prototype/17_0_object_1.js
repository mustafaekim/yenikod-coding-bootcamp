/*
    Notes
    *  [[__P__]] denotes that there happen a prototype chain lookup


    == Operators ==
        in: [[__P__]] returns true if the specified property is in the specified object or its prototype chain.
        delete: removes a property from an object. 
            *** It only has an effect on own properties
            *** Non-configurable properties cannot be removed
            *** if delete returns true, that means that either it removed the property or the property didn't exist (so the result is the same)
        instanceof: 


    == Statements ==
        for...in: [[__P__]] iterates over the enumerable properties of an object. For each distinct property, statements can be executed.
            The loop will iterate over all enumerable properties of the object itself 
            and those the object inherits from its constructor's prototype 
            (properties closer to the object in the prototype chain override prototypes' properties).


    === Object ===
        Object.length: Has a value of 1.
        Object.prototype: Allows the addition of properties to all objects of type Object.

        Object.assign() Copies the values of all enumerable own properties from one or more source objects to a target object.
        Object.create() Creates a new object with the specified prototype object and properties.
        Object.defineProperty() Adds the named property described by a given descriptor to an object.
        Object.defineProperties() Adds the named properties described by the given descriptors to an object.
        Object.entries() Returns an array of a given object's own enumerable property [key, value] pairs.
        Object.freeze() Freezes an object: other code can't delete or change any properties.
        Object.getOwnPropertyDescriptor() Returns a property descriptor for a named property on an object.
        Object.getOwnPropertyDescriptors() Returns an object containing all own property descriptors for an object.
        Object.getOwnPropertyNames() Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
        Object.getOwnPropertySymbols() Returns an array of all symbol properties found directly upon a given object.
        Object.getPrototypeOf() Returns the prototype of the specified object.
        Object.is() Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
        Object.isExtensible() Determines if extending of an object is allowed.
        Object.isFrozen() Determines if an object was frozen.
        Object.isSealed() Determines if an object is sealed.
        Object.keys() Returns an array containing the names of all of the given object's own enumerable properties.
        Object.preventExtensions() Prevents any extensions of an object.
        Object.seal() Prevents other code from deleting properties of an object.
        Object.setPrototypeOf() Sets the prototype (i.e., the internal [[Prototype]] property)
        Object.values() Returns an array of a given object's own enumerable values.


    == Object.prototype ==
        *** All properties are {writable: false, enumerable: false, configurable: false}

        Object.prototype.constructor: [Function: Object]
        Object.prototype.__proto__ : null
        Object.prototype.__noSuchMethod__ : Allows a function to be defined that will be executed when an undefined object member is called as a method.

        Object.prototype.__defineGetter__() Associates a function with a property that, when accessed, executes that function and returns its return value.
        Object.prototype.__defineSetter__() Associates a function with a property that, when set, executes that function which modifies the property.
        Object.prototype.__lookupGetter__() Returns the function associated with the specified property by the __defineGetter__() method.
        Object.prototype.__lookupSetter__() Returns the function associated with the specified property by the __defineSetter__() method.
        Object.prototype.hasOwnProperty() Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.
        Object.prototype.isPrototypeOf() [[__P__]] Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.
        Object.prototype.propertyIsEnumerable() Returns a boolean indicating if the internal ECMAScript [[Enumerable]] attribute is set.
        Object.prototype.toSource() Returns string containing the source of an object literal representing the object that this method is called upon; you can use this value to create a new object.
        Object.prototype.toLocaleString() Calls toString().
        Object.prototype.toString() Returns a string representation of the object.
        Object.prototype.unwatch() Removes a watchpoint from a property of the object.
        Object.prototype.valueOf() Returns the primitive value of the specified object.
        Object.prototype.watch() Adds a watchpoint to a property of the object.
*/