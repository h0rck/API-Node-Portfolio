const express = require('express');
const app = express();
const api = require('./apis');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(api);

app.listen(8000, () => console.log('http://127.0.0.1:8000'));