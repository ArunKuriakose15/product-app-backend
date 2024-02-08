const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const productRoutes=require("./controllers/productRouter")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://arun:arun123@cluster0.5bjnd.mongodb.net/productDb?retryWrites=true&w=majority",
    { useNewUrlParser: true })

app.use("/api/product",productRoutes)

app.listen(3001,()=>{
    console.log("Server running ...")
})