const express = require('express')
const routes = express.Router()
const productsControllers = require('../controllers/shop.js')


routes.post('/add-products',productsControllers.PostProducts)


module.exports = routes