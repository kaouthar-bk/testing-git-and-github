import express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log("Hello, world");
});
app.post("/", (req, res) => {
    console.log("Post request");
});

app.listen(3000);
