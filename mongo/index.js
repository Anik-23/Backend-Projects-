const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(()=>{
        console.log('Connection Open!!!');
    })
    .catch((err)=>{
        console.log("OOPS an error Occur");
        console.log(err);
    })

    const movieSchema= new mongoose.Schema({
        title:String,
        year:Number,
        score:Number,
        rating:String
    });

    const Movie=mongoose.model('Movie',movieSchema);
    // const tareZameenPar=new Movie({title:'Tare Zameen Par',year:2011,score:9.0,rating:'S'}); 

    Movie.insertMany([
        {title:'Baaghwan',year:2011,score:8.5,rating:'M'},
        {title:'ILU',year:2009,score:8.0,rating:'M'},
        {title:'I',year:2015,score:5.0,rating:'F'},
        {title:'Bahubli',year:2018,score:9.5,rating:'H'}
    ])
        .then((data)=>{
            console.log("IT WORKED")
            console.log(data)
        })