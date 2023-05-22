import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log("Hello, world! are you ready?");
});
app.post("/", (req, res) => {
    console.log("Post request");
});

app.get("/id", (req, res) => {
    console.log("get request by id");
});

app.listen(3000);
