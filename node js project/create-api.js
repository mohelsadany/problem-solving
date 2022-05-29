//Building a REST API with Node and Express

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
 let book   =[];
 app.use(cors());

 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
 app.post('/book', (req, res) => {
     book.push(req.body);
     res.send(book);
 });

 app.listen(3000, () => {
     console.log('Server started on port 3000');
 });