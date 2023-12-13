const express = require('express')
const routes = express.Router()
const productsControllers = require('../controllers/shop.js')


routes.get('/add-products',productsControllers.GetProducts)


module.exports = routes