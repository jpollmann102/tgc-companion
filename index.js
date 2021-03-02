"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var cors = require('cors');
var PORT = process.env.PORT ? process.env.PORT : 8626;
var app = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    methods: "GET"
};
app.use(cors(corsOptions));
app.use(express.static("./dist/tgc-companion/"));
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: 'dist/tgc-companion/' });
});
// start the Express server
app.listen(PORT, function () {
    console.log("server started on " + PORT);
});
