console.log(__dirname);
console.log(__filename);

eval("console.log('Hello Eval')"); //eval is evil


// Having too many global variables pollutes the namespace and hence must be avoided
// Math is a namespace like container for Math related functionality

console.log(Math.PI);
console.log(Math.floor(Math.random()*10));
// Math properties
// Math.PI
// abs() Returns the absolute value of a number.
// acos() Returns the arccosine (in radians) of a number.
// asin() Returns the arcsine (in radians) of a number.
// atan() Returns the arctangent (in radians) of a number.
// atan2() Returns the arctangent of the quotient of its arguments.
// ceil() Returns the smallest integer greater than or equal to a number.
// cos() Returns the cosine of a number.
// exp() Returns EN, where N is the argument, and E is Euler's constant, the base of the natural logarithm.
// floor() Returns the largest integer less than or equal to a number.
// log() Returns the natural logarithm (base E) of a number.
// max() Returns the largest of zero or more numbers.
// min() Returns the smallest of zero or more numbers.
// pow() Returns base to the exponent power, that is, base exponent.
// random() Returns a pseudo-random number between 0 and 1.
// round() Returns the value of a number rounded to the nearest integer.
// sin() Returns the sine of a number.
// sqrt() Returns the square root of a number.
// tan() Returns the tangent of a number.
// toSource() Returns the string "Math".






/*
    // Functions
    eval()
    uneval() // not standard
    isFinite()
    isNaN()
    parseFloat()
    parseInt()
    decodeURI()
    decodeURIComponent()
    encodeURI()
    encodeURIComponent()
    escape()  // depreciated
    unescape() //depreciated

    // Objects
    Object
    Function
    Boolean
    Symbol
    Error
    EvalError
    InternalError
    RangeError
    ReferenceError
    SyntaxError
    TypeError
    URIError

    Number
    Math
    Date
    String
    RegExp
    Array
    Int8Array
    Uint8Array
    Uint8ClampedArray
    Int16Array
    Uint16Array
    Int32Array
    Uint32Array
    Float32Array
    Float64Array
    Map
    Set
    WeakMap
    WeakSet
    ArrayBuffer
    SharedArrayBuffer 
    Atomics 
    DataView
    JSON
    Promise
    Generator
    GeneratorFunction
    AsyncFunction
    Reflect
    Proxy
    Intl
    Intl.Collator
    Intl.DateTimeFormat
    Intl.NumberFormat
    WebAssembly
    WebAssembly.Module
    WebAssembly.Instance
    WebAssembly.Memory
    WebAssembly.Table
    WebAssembly.CompileError
    WebAssembly.LinkError
    WebAssembly.RuntimeError
    arguments
*/