const fs = require("fs")
constpath = require("path")
const db = require("../database/models/")
const {Op} = require("sequelize")

module.exports={
    product:(req,res) =>{
        res.render("products/product")
    },
    create_design:async(req,res)=> {
        db.Hardware.findAll()
        .then((hardware)=> {
            res.render("products/createProduct",{hardware})
        })
        .catch((error)=> {
            res.render("error404",{error})
        })
    },
    create:(req,res)=> {

    },
    Update_design:(req,res)=> {
        res.render("products/update")
    },
    Update:(req,res)=> {
        
    },
    Delete:(req,res)=> {
        
    },
    build_pc:(req,res) => {
        req.render("products/pc_build")
    }
}