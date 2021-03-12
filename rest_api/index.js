//rest apis => answer via routes and method (get, post etc)

"use strict";
//search in node_modules
var express = require("express");
//executes express
var app = express();
//everytime a get is done in the root, callback function is executed
app.get("/", function (req, res) {
  res.send("<h1>root dir</h1>");
});

app.get("/user", function (req, res) {
  res.send("user");
});

app.listen(3000);
