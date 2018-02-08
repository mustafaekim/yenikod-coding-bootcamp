var http = require("http");
var url = require("url");


function myHandler (request, response){
    response.writeHead(200, {'Content-type': 'text/plain'});
      
    console.log(request.url);
    //console.dir(url.parse(request.url, true));

    //var { href, pathname, path, search} = url.parse(request.url, true);

    var urlObj = url.parse(request.url, true);
    var href = urlObj.href;
    var pathname = urlObj.pathname;
    var path = urlObj.path;
    var search = urlObj.search;

    let body = `
    Hello!
    URL: ${request.url}
    Href: ${href}
    Pathname: ${pathname}
    Path: ${path}
    Search: ${search}
    ==Body==
    Selamlar
    `;

    response.end(body);
}


http.createServer(myHandler).listen(7000);