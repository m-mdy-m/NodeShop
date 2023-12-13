exports.Error404= (req,res)=>{
    res.status(404).render('404', {
        TitlePage:"page-notFound",
        path:req.path
    })
}