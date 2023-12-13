const fs = require('fs')
const path = require('path')
const pth = path.join(path.dirname(process.mainModule.filename), 'database', 'pro.json' )
const getPro = cb =>{
    fs.readFile(pth,(err,data)=>{
        if(err){
            cb([])
        }else{
            cb(JSON.parse(data))
        }
    })
}

module.exports = class Product{
    constructor(id,title,imgUrl,price,description){
        this.id = id
        this.title = title
        this.imgUrl = imgUrl
        this.price = price
        this.description = description
    }
    save(){
        getPro(products =>{
            this.id = Math.random().toString();
            products.push(this);
            fs.writeFile(pth, JSON.stringify(products))
        })
        
    }
    static fetchALL(cb){
        getPro(cb)
    }

}   