const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use(require('./router/index'));
app.listen(3636);
console.log('xxxxxxxxxxxxxxxxxxxxxxxxx')