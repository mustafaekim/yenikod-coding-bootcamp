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
