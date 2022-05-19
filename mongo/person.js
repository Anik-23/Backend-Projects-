const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(()=>{
        console.log('Connection Open!!!');
    })
    .catch((err)=>{
        console.log("OOPS an error Occur");
        console.log(err);
    })


    const personSchema=new mongoose.Schema({
        first:String,
        last:String
    })

    const Person = mongoose.model('Person',personSchema);

    personSchema.virtual('full').get(function(){
        return `${this.first} ${this.last}`
    })