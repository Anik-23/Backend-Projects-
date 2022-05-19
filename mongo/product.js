const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(()=>{
        console.log('Connection Open!!!');
    })
    .catch((err)=>{
        console.log("OOPS an error Occur");
        console.log(err);
    })



const productSchema=new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        default:0,
        min:[0,'Price Cannton be less than Zero']
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories:[String],
    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        },

    },
    size:{
        type:String,
        enum:['S','M','L']
    }

})




// productSchema.methods.addCategory=function(newCat){
//     this.categories.push(newCat);
//     return this.save();
// };

const Product = mongoose.model('Product',productSchema);





// const findProduct= async ()=>{
//     const foundProduct= await Product.findOne({Name:'Mountain Car Climber'})
//     console.log(foundProduct)
//     await foundProduct.addCategory('Krne wali')
//     console.log(foundProduct)
// }

// findProduct();

// const bike= new Product( {Name:'Mountain Climber',price:11,onSale:true,size:'Ml'})
// const car= new Product( {Name:'Mountain Car Climber',price:1100000,onSale:true,size:'M'})
// car.save()
// .then((data)=>{
//     console.log("It Worked")
//     console.log(data)
// })
// .catch(err=>{
//     console.log("OHH NOOO ERRRRR!!!")
//     console.log(err);
// })