function greet(hi) {
    console.log(hi);
    var message = hi();
    console.log(message);
}
function hello() { return "hello" }
function selam() { return "selam"; }

var lang = "tr"
switch (lang) {
    case "tr":
        greet(selam);
        break;
    case "en":
        greet(hello);
}