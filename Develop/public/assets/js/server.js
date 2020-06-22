// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Routes
// =============================================================

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"))
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/api/notes", function(req, res) {
    var result = {
        "data": note
    };
    res.json(result);
});

app.post("/api/notes", function(req, res) {
    var result = {
        "data": note
    };
    res.json(result);
});
// Look into this but on the right track I think
app.delete("/api/notes/:id", function(req, res) {
    var result = {
        "data": note
    };
    res.json(result);
});






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
