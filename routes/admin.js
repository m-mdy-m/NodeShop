const express = require("express")
const routes = express.Router()
const adminControllers = require("../controllers/admin")

routes.get('/admin/dashboard',adminControllers.getDashboard)



routes.post('/delete',adminControllers.postDelete)
module.exports = routes