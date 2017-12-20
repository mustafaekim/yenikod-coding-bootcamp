// It's a good pattern to declare all let variables at the beginning of the scope
// It clearly signals out that there will be no other let declarations throughout the block
// Hence we dont fall into the error of re-declaring an already declared let variable

function hi(){
    var result;

    {   let firstName, lastName, greeting, space
        firstName = "Mustafa";
        lastName = "Ekim";
        greeting = "Hello";
        space = " ";
        result = greeting + space + firstName + space + lastName;
    }
    return result;     
}

console.log(hi());