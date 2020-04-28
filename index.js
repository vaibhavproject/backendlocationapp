const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const routes = require("./routes");
const Port = 4000 || process.env.port;

app.use(routes);

server.listen(Port,()=>{
    console.log("Server is running on port",Port);
})