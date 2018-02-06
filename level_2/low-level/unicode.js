// Hexadecimal

// One hexadecimal can represent 16 types, hence can be stored inside 2 bytes
// 0 to 9 and a, b, c, d, e, f 
// -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]

/* 
-> Each block of 4 bits can be represented by one hexadecimal

0000 = 0	0100 = 4	1000 = 8	1100 = C
0001 = 1	0101 = 5	1001 = 9	1101 = D
0010 = 2	0110 = 6	1010 = A	1110 = E
0011 = 3	0111 = 7	1011 = B	1111 = F

-> Hence, each block of 8 bits (one byte) can be represented by 2 hexadecimals
*/


console.log(parseInt("a", 16)); // -> 10
console.log(parseInt("b", 16)); // -> 11
console.log(parseInt("c", 16)); // -> 12
console.log(parseInt("d", 16)); // -> 13
console.log(parseInt("e", 16)); // -> 14
console.log(parseInt("f", 16)); // -> 15
console.log(parseInt("g", 16)); // -> NaN

// Decimal to Hexadecimal
console.log((100).toString(16));
console.log((1000).toString(16));
console.log((10000).toString(16));

// Hexadecimal to Decimal
console.log(parseInt("64", 16));
console.log(parseInt("3e8", 16));
console.log(parseInt("2710", 16));


/* ASCII
    every 8 bits (every byte) can be combined and represented by one of 256 ASCII 

    {
        "31": "",      "32": " ",     "33": "!",     "34": "\"",    "35": "#",    
        "36": "$",     "37": "%",     "38": "&",     "39": "'",     "40": "(",    
        "41": ")",     "42": "*",     "43": "+",     "44": ",",     "45": "-",    
        "46": ".",     "47": "/",     "48": "0",     "49": "1",     "50": "2",    
        "51": "3",     "52": "4",     "53": "5",     "54": "6",     "55": "7",    
        "56": "8",     "57": "9",     "58": ":",     "59": ";",     "60": "<",    
        "61": "=",     "62": ">",     "63": "?",     "64": "@",     "65": "A",    
        "66": "B",     "67": "C",     "68": "D",     "69": "E",     "70": "F",    
        "71": "G",     "72": "H",     "73": "I",     "74": "J",     "75": "K",    
        "76": "L",     "77": "M",     "78": "N",     "79": "O",     "80": "P",    
        "81": "Q",     "82": "R",     "83": "S",     "84": "T",     "85": "U",    
        "86": "V",     "87": "W",     "88": "X",     "89": "Y",     "90": "Z",    
        "91": "[",     "92": "\\",    "93": "]",     "94": "^",     "95": "_",    
        "96": "`",     "97": "a",     "98": "b",     "99": "c",     "100": "d",    
        "101": "e",    "102": "f",    "103": "g",    "104": "h",    "105": "i",    
        "106": "j",    "107": "k",    "108": "l",    "109": "m",    "110": "n",    
        "111": "o",    "112": "p",    "113": "q",    "114": "r",    "115": "s",    
        "116": "t",    "117": "u",    "118": "v",    "119": "w",    "120": "x",    
        "121": "y",    "122": "z",    "123": "{",    "124": "|",    "125": "}",    
        "126": "~",    "127": ""
    }

*/
console.log("A in ASCII:", "ABC".charCodeAt(0));
console.log("! in ASCII:", "!".charCodeAt(0));




// In Unicode, a letter maps to something called a code point which is still just a theoretical concept. 
// How that code point is represented in memory or on disk is a whole nuther story.
// Every platonic letter in every alphabet is assigned a magic number by the Unicode consortium 
    // which is written like this: U+0639.  
    // This magic number is called a code point. 
    // The U+ means “Unicode” and the numbers are hexadecimal.
    // See: https://unicode-table.com
    // Since unicode is just a series of mapping between characters and numbers, there is no limit on the number of letters that Unicode can define 

// Find, what is unicode: U+0639 ? (0639 is hexadecimal)
let unicode = "041B"; // hexadecimal representation
let decimal = parseInt(unicode, 16);
console.log("U+" + unicode, "-> decimal:", decimal, "-> character: ", String.fromCodePoint(decimal));


// UTF-8 is an encoding for storing Unicode in a stream of bytes
// In UTF-8, every code point from 0-127 is stored in a single byte. 
// Only code points 128 and above are stored using 2, 3, in fact, up to 6 bytes.

// If you have a string, in memory, in a file, or in an email message, 
// you have to know what encoding it is in or you cannot interpret it or display it to users correctly.


// ** Base64 ** //
/*
    Base64 encoding schemes are commonly used when there is a need to encode binary data 
        that needs to be stored and transferred over media that are designed to deal with textual data.

    -> btoa() method creates a base-64 encoded ASCII string from a String object 
        in which each character in the string is treated as a byte of binary data.
*/
// Browser's only:
// console.log(WindowOrWorkerGlobalScope.btoa("123"));



