var http = require("http");
var url = require("url");

var users = [
    { id: 1, name: "Mustafa" }
    , { id: 2, name: "Orhan" }
]

var foods = [
    { id: 1, name: "melon" },
    { id: 2, name: "apple" },
    { id: 3, name: "lemon" }
]


var server = http.createServer();

server.on("request", function (request, response) {

    var urlObj = url.parse(request.url, true);
    var path = urlObj.path;

    console.log(`New Request:
    Path: ${urlObj.path}`)

    var body;
    if (path == "/users") {
        body = JSON.stringify(users);
    }
    else if (path == "/foods") {
        body = JSON.stringify(foods);
    }
    else if (path == "/home") {
        body = "<html><body><h1>Hello</h1></body></html>";
        //response.writeHead(200, { 'Content-type': 'text/html' })
    }
    else {
        body = "None";
    }

    response.writeHead(200, { 'Content-type': 'application/json' });
    response.end(body);

});


var port = 7000;
server.listen(port)
console.log("Server listening on port ", port);