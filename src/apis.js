const authController = require('./app/controllers/authController');
const authMiddleware = require('./app/middleware/auth');
const express = require('express');
const api = express.Router();



api.post('/register',     authController.register);
api.post('/authenticate', authController.authenticate);

api.use(authMiddleware);

api.get('/user',    authController.user);


module.exports = api;