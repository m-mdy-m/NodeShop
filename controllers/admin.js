const Product = require("../models/Product")


exports.getDashboard = (req,res,next)=>{
    Product.fetchALL(products =>{
        res.render('admin/products.ejs', {
            TitlePage:"dashboard",
            prods: products,
            path : req.path
        })
    })
    
}