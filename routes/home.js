const express = require('express');
const routes = express.Router()
const homeControllers = require('../controllers/home')

routes.get('/',homeControllers.getHome)



module.exports = routes