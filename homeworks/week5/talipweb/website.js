const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
var mysql = require('mysql')
var bodyParser = require('body-parser')




//app.use(express.static("public"));

//app.get("/homepage", (req, res) => { res.sendFile("./public/main.html", { root : __dirname}) })

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'nodeuser',
    password: '1234',
    database: 'classmanager'
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get("/", function (req, res) {
    var query = "SELECT * FROM message"

    connection.query(query, function (error, results, fields) {
        if (error) throw error;
        console.log('The result is: ');
        console.dir(results);

        res.render("home.njk", { results: results });
    });

    console.log("hop2")
})

app.get("/cv", function (req, res) {
    res.render("cv.njk", {
        name: "Talip Can",
        age: 24,
        university: {
            name: "Istanbul Technical University",
            program: "Management Engineering"
        },
        highschool: "Eyüboğlu Science High School",
        workplaces: {
            first: "Mercedes-Benz Türk A.ş.",
            second: "Türk Telekomunikasyon A.ş."
        },
        skills: {
            first: "programming",
            second: "design",
            third: "brainstorming",
            fourth: "teamwork"
        }
    });
})

app.get("/contact", function (req, res) {
    res.render("contact.njk");
})




app.get('/cv2', function (req, res) {
    res.render('cv.nunjucks', {
        name: "Talip Can",
        age: 24,
        university: {
            name: "Istanbul Technical University",
            program: "Management Engineering"
        },
        highschool: "Eyüboğlu Science High School",
        workplaces: {
            first: "Mercedes-Benz Türk A.ş.",
            second: "Türk Telekomunikasyon A.ş."
        },
        skills: {
            first: "programming",
            second: "design",
            third: "brainstorming",
            fourth: "teamwork"
        }
    });
});


app.post('/new-message', function(req, res){
    
    var formData = req.body;

    res.render("contact.njk", {ack: formData});
})

app.get('/user', function(req, res){
    console.log("/user request")

    res.json(req.query)
})

app.listen(3000, () => console.log('Now, app listening on port 3000!'))