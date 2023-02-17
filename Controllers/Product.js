const Schema=require('../Models/Product')
const getAllProducts=async(req,res)=>{
    const PROP =await Schema.find(req.query)
    res.status(200).json(PROP)

}
const getSingleProduct=async(req,res)=>{
    const PROP=await Schema.findById(req.params.id)
    res.status(200).json({id:PROP})

}

module.exports={getAllProducts,getSingleProduct}