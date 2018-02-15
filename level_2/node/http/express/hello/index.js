var nunjucks = require("nunjucks");

const express = require('express')
const app = express()


app.use("/public", express.static('pub'))

nunjucks.configure('template', {
    autoescape: true,
    express: app
});

app.get("/nunjucks", function (req, res) {
    res.render("master.html", { name: "Mustafa" })
})

app.get('/', function (req, res) {
    res.send("Hello Yenikod")
});

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.get("/mustafa", function(req, res){
    res.json({name: "Mustafa"})
})


function log(req, res, next) {
    console.log("Common Logger: New request: ", req.path);
    next();
}

app.all("*", log);

app.get('/users/:userid/car/:carid', function (req, res) {

    res.send(req.params);



})


app.listen(3000, () => console.log('Example app listening on port 3000!'))