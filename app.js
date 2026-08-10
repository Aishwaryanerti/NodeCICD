const express = require("express");
const app = express();
 
app.get("/hello", (req, res) => {
    res.json({
        message: "Hello World"
    });
});
 
module.exports = app;
const add = require("./sum");

const app = express();

app.get("/", (req, res) => {
    res.send("Node.js Server is Running");
});

app.get("/sum", (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);

    const result = add(num1, num2);

    res.json({
        num1: num1,
        num2: num2,
        result: result
    });
});

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
