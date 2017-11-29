function greet(hi) {
    var message = hi();
    console.log(message);
}
function hello() { return "hello" }
function selam() { return "selam"; }

var lang = "en";
switch (lang) {
    case "tr":
        greet(selam);
        break;
    case "en":
        greet(hello);
}