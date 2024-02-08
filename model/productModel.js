const mongoose=require("mongoose")
const productSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        price:String,
        url:String
    }
)

module.exports=mongoose.model("product",productSchema)