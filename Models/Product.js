const mongoose = require('mongoose')
const Product = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        requird: [true, 'price must be required']
    },
    category: {
        type: String,
    },
    stars: {
        type: Number,
        required: [true, "price must be provided"]
    },
    reviews: {
        type: Number,
        required: [true, "price must be provided"]
    },
    stock: {
        type: Number,
        required: [true, "price must be provided"]
    },
    company: {
        type: String,
        requird: [true, "company must be taken"]
    },
    featured: {
        type: Boolean,
        default: false,
    },
    display: {
        type: Boolean,
        default: false,
    },
    description:{
        type:String,
        requird:true
    },
    colors:{
        type : Array,
        
    },
    image:{
     type : Array , "default" : [] 


    }

}, { timestamps: true })

module.exports = mongoose.model('Product', Product);