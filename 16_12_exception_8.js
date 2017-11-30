"use strict"

// finally is the first step to be executed after the try/catch block

try {
    try {
        var a = 10;
        throw new Error('oops');
        a++;
    }
    finally {
        a = 11;
        console.log('finally, a is', a);
    }
}
catch (ex) {
    console.error('outer', ex.message);
}
