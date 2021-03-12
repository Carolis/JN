//rest apis => answer via routes and method (get, post etc)

"use strict";
//search in node_modules
var express = require("express");
var cors = require("cors");

//executes express
var app = express();

var users = {
  ednaldo: {
    nome: "ednaldo pereira",
    idade: 25,
  },
  roberto: {
    nome: "roberto carlos",
    idade: 135,
  },
};

app.use(cors());

//everytime a get is done in the root, callback function is executed
app.get("/", function (req, res) {
  res.send("<h1>root dir</h1>");
});

app.get("/user", function (req, res) {
  res.send("user");
});

//dynamic
app.get("/user/:username", function (req, res) {
  res.send(req.params.username);
});

app.get("/user/:username", function (req, res) {
  var username = req.params.username;
  if (users[username]) {
    return res.json(users[username]);
  }
  res.status(404).json({ error: "no user data" });
});

app.listen(3000);
