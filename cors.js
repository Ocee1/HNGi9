const express = require('express');
const cors = require('cors');

const app = express();

const whitelist = ['https://hng-api.herokuapp.com/api', 'http://localhost:4000/api'];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;

    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
}

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);