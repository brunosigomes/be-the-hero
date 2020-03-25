// Loading Express, Cors and Routes
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// Creating Application
const app = express();

// Settting Application
app.use(cors());
app.use(express.json());
app.use(routes);

// Setting Port for Applicatio "localhost:port"
app.listen(3333);