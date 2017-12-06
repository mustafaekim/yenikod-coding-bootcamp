function hi(){
    var result; // I intentionally say that I will use this var throughout my function
    
    {
        let repeat = "#" // I intentionally say that, this variable will not be used after the block
        // If I choosed var inside of let, I would have to check if I use this variable throughout the function body.
        // By using let, I know for sure that this variable is used only inside this block

        for(let i = 0; i<5; i++){
            result += repeat;
        }
    }

    return result;
}

// Use var/let depending your intention. Don't missuse them, even though the code will work either way


// let keyword cannot be repeated
let a = 0;
//let a = 0; //-> SyntaxError: Identifier 'a' has already been declared