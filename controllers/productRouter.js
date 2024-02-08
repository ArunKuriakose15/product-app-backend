const express=require("express")
const router=express.Router()
const productModel=require("../model/productModel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let product=new productModel(data)
    let result=await product.save()
    res.json({status:"success"})
})

router.get("/view",async(req,res)=>{
    let data=await productModel.find()
    res.json(data)
})
router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await productModel.find(input)
    res.json(data)
})

module.exports=router