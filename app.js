const express = require("express");
const app = express();
const port = 3031;
const path = require("path");
app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname,"/views/home.html")))
app.listen(port, ()=> console.log("Servidor correindo en puerto 3031"))
