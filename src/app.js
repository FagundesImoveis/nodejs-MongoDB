const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('../routes');
const database = require('./database/connect')();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(routes);

module.exports = app;