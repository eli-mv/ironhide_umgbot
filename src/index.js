const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(require('./router/index'));
app.listen(3636);