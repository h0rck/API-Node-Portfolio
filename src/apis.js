const express = require('express');
const api = express.Router();
const authController = require('./contollers/authController');

api.post('/register', authController.register);

api.get('/user',      authController.user);

api.post('/authenticate', authController.authenticate)

module.exports = api;