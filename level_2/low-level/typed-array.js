/*
    When creating an instance of a TypedArray (e.g. Int8Array), an array buffer is created internally in memory 
        or, if an ArrayBuffer object is given as constructor argument, then this is used instead.  
        The buffer address is saved as an internal property of the instance and all the methods of %TypedArray%.prototype, 
        i.e. set value and get value etc., operate on that array buffer address.

    new TypedArray(); // new in ES2017
    new TypedArray(length);
    new TypedArray(typedArray);
    new TypedArray(object);
    new TypedArray(buffer [, byteOffset [, length]]);

    where TypedArray() is one of:
        Int8Array();
        Uint8Array();
        Uint8ClampedArray();
        Int16Array();
        Uint16Array();
        Int32Array();
        Uint32Array();
        Float32Array();
        Float64Array();

*/

// create a TypedArray with a size in bytes
const typedArray1 = new Int8Array(10);
typedArray1[0] = 32;
typedArray1[1] = -10;
console.log("Each element in Int8Array occupies: " + Int8Array.BYTES_PER_ELEMENT + " byte(s)");

const typedArray2 = new Int8Array(typedArray1); // copy
typedArray2[2] = 42;

console.log(typedArray1);
console.log(typedArray2);

console.log(typedArray1.buffer); // returns an ArrayBuffer

// Or the other way around
// First create an ArrayBuffer, then view it as a TypedArray
var buffer = new ArrayBuffer(12); // will occupy 12 bytes, since each element of ArrayBuffer automatically occupies 1 byte
// You cannot directly manipulate the contents of an ArrayBuffer
// buffer is 12 bytes. Each Int32Array element occupies 4 bytes. 
// So 12 bytes will be read as a serie of 4 bytes. 
// Hence 12 should be a multiple of 4, so that it can be read as an Int32Array
var view = new Int32Array(buffer); // now we have an Int32Array of 3 elements!
console.log(view, "has", view.length, "elements");

// ***

// String to bytes

function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function str2ab(str) {
    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}

let helloArrayBuffer = str2ab("Mustafa");
console.log(new Uint16Array(helloArrayBuffer));
let stringBack = ab2str(helloArrayBuffer);
console.log(stringBack);

// UTF-8 String to bytes for Browsers only!
// var uint8array = new TextEncoder("utf-8").encode("Plain Text");
// var string = new TextDecoder().decode(uint8array);
// console.log(uint8array ,string )
