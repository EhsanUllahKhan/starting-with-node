//eslint jsversion=6

const express = require("express");
const app = express();

app.get("/", function (request, response) {
    response.send("<h1>Hellllooooooo</h1>")
});

app.get("/contact", function (request, response) {
    response.send("<h2>Contact me at : ullahkhanihsan@yahoo.com</h2>")
});

app.get("/about", function (request, response) {
    response.send("<h2>Hi there! I'm EHsan</h2>")
});

app.get("/hobbies", function (request, response) {
    response.send("<h2>I love traveling, gym</h2>")
});

app.listen(3000, function () {
    console.log("\t==> Server started at port 3000\t")
});
