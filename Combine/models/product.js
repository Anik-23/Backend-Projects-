const mongoose =require('mongoose');

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true,
        default:0
    },
    category:{
        type:String,
        lowercase:true,
        enum:['fruit','vegetable','dairy','fungi']
    }

})

const Product = mongoose.model('Product',productSchema);
module.exports=Product;