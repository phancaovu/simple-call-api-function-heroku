const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const importData = require("./data.json");

let port = process.env.PORT || 3000;

app.get("/",(req, res)=> {
    res.send("hello word");
})

app.get("/user",(req, res)=> {
    res.send(importData);
})