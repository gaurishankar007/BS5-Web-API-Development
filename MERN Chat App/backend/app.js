const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const chat = require("./data/data.js");

app.get("/api", (req, res) => {
    res.send("API is running....");
});

app.get("/api/data", (req, res) => {
    res.send(chat);
});

app.get("/api/data/:id", (req, res) => {
    res.send(chat.find((c) => c._id === req.params.id));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log("Server started on port " + PORT+ "."))