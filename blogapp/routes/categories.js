const router = require("express").Router();
const Categori = require("../models/Categori");

router.post("/" , async(req,res) =>{
    const newCate = new Categori(req.body)
    try {

        const savedCate = await newCate.save();
        res.status(200).json(savedCate)
        
    } catch (error) {
        res.status(404).json(error)
        
    }
})


router.get("/" , async(req,res) =>{
    
    try {

        const cate = await Categori.find();
        res.status(200).json(cate)
        
    } catch (error) {
        res.status(404).json(error)
        
    }
})













module.exports = router