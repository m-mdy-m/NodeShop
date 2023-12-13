const express = require("express")
const routes = express.Router()
const adminControllers = require("../controllers/admin")

routes.get('/admin/dashboard',adminControllers.getDashboard)


module.exports = routes