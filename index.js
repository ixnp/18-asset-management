'use strict';

const express = require('express');
const app = express();
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});