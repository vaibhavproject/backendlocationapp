const express = require("express");
const routes = express.Router();

routes.get("/",(req,res,next)=>{
    res.send("<h1>Server is up and running.</h1>")
});

module.exports = routes;