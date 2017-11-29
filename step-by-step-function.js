// function is a type of value
// we declare a function whose name is "add"
// we can reach this declared function by it's name. (as we do for variable)

// all variables return the value they are assigned
// a value of type function can be called by () operator
// when a function is called, the function returns the expression of the return statement in the function body
function add(a, b) {
    return a+b;
}


// add bir değişken.
// değişkenler içindeki değeri döner.
// add'in içindeki değer bir function.
// dolayısıyla aşağıdaki statement console'a bu function değerini yazar.
// bu durumda aşağıdaki statement console'a  [Function: add] yazar.
console.log(add);

// add bir değişken 
// add değişkeni içindeki değer bir function. 
// bu function'u () operatörü ile çağırıyoruz ve  function bize return statement'daki expression'ın sonucunu dönüyor.
console.log(add(3, 5));
