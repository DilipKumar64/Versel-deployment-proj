const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3064, () => console.log("Server ready on port 3064."));

module.exports = app;