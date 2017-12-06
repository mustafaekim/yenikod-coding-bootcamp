/* Whenever you 
    pass a function to another function 
    or return a function
    a closure occures, because you actually not return/pass a value but an object reference.
    This object reference keeps the outer function and hence its scope alive
*/

/*
    Whenever you think you are passing or returning a function, always remember that you only pass the reference
    of the function. So this function is on-the-fly created and attached to the lexical scope, than sent as a reference
*/

function teller(){
    var name = "Mustafa"

    return function(){
        return name;
    } 
    // -> That creates a function on-the-fly and attaches its scope lexically. 
    // Once created, return statement pass only the reference of this function
    // But be sure that that function lives here and hence can always reach its lexical scope
}

/*
    The only extra thing that you must remember is that 
    everytime a function is called, a new execution context is created, where scope lives.
    So if teller is called twice, there are 2 independet execution contexes, both having their own scope, hence their own version of variable name
*/