function hi(){
    function hello(){
        return "hello"
    }
    return hello;
}
var salut = hi();
console.log(salut);
console.log(salut());
console.log(hi()());


function x1(){
    return function(){
        return function(){
            return function(){
                console.log("op");
            }
        }
    }
}

// x1 function'unu çağır
// döndüğü değeri çağır
// döndüğü değeri çağır
// döndüğü değeri çağır
x1()()()();
