const express = require("express");
const app = express();
app.get('/routine1', function(req, res){
    res.send("Routine page")
});

app.get('/clubs', function(req, res){
    res.send("Clubs Page")
});

app.get("/", function(req, res){
    res.send("This is home page.")
});

app.get("/news/:year/:month/:day", function(req, res){
    const year = req.params.year;    
    const month = req.params.month;    
    const day = req.params.day;
    res.send(year + " " + month + " " + day);
});

app.get("/home", function(req, res){
    res.sendFile(__dirname+"/home.html")
});

app.get("/club", function(req, res){
    res.sendFile(__dirname+"/club.html")
});

app.get("/routine", function(req, res){
    res.sendFile(__dirname+"/routine.html")
});

app.delete('/student/update/:sId/:msg', function(req, res){
    const sId = req.params.sId;
    const msg = req.params.msg;
    console.log(sId + ", " + msg);
});

app.post('/news/create', function(req, res){
    console.log("News created! from post")
});

app.delete('/news/create', function(req, res){
    console.log("News created! from delete")
});

app.put("/news/update/:id", function(req, res){
    const nId = req.params.id;
    console.log(nId);
});

app.post('/anyurl/abc/xyz', function(req, res){
    console.log("deleted")
    res.send("deleted")
});

app.get("*", function(req, res){
    res.send("Invalid URL")
});

app.listen(90);