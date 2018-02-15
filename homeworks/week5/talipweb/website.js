const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

//app.use(express.static("public"));

//app.get("/homepage", (req, res) => { res.sendFile("./public/main.html", { root : __dirname}) })

nunjucks.configure('views', {
    autoescape: true,
    express: app
});



app.get("/", function (req, res) {
    res.render("home.njk");
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


app.listen(3000, () => console.log('Now, app listening on port 3000!'))