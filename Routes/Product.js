const express=require('express')
const {getAllProducts,getSingleProduct} =require('../Controllers/Product')
const Router=express.Router();
Router.route('/').get(getAllProducts);
Router.route('/:id').get(getSingleProduct);


module.exports=Router;