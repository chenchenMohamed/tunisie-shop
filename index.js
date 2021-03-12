const express = require("express")

const app = express();
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("exemple app is listening");
})