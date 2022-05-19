const express=require("express");

const app= express();

const path=require("path");

const datam =require("./data.json")

app.use(express.static(path.join(__dirname,'/public')))

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'/views'))


// app.use((req,res)=>{
//     console.log("Kuch daba!!!!")
//     res.send("<h1>We are listening to your request !! waaait</h1>");
//     console.log(req.baseUrl)
// })

app.get('/',(req,res)=>{
    res.render("home")
})

app.get('/cat',(req,res)=>{
    res.send("<h2>Meeew</h2>")
})

app.get('/dog',(req,res)=>{
    res.send(`<label for="name">Name</label>
    <input type="text" id="name">`)
})

app.get('/r/:subString', (req,res) => {
    const { subString } =req.params;
    const reqData= datam[subString];
    if(reqData){
    res.render('subString', {...reqData});
    }
    else{
        res.render('ErrorPage',{subString})
    }
})

    

app.get('/random',(req,res)=>{
    const num=Math.floor(Math.random()*10 +1);
    res.render('random',{rand:num});
})

app.get('/allCats',(req,res)=>{
    const cats=[
        'aditya','shukla','nikhil','bishesh','gaurav','antrix'
    ]
    res.render('allCats',{cats})
})

app.get('*',(req,res)=>{
    res.send("That path is not recognised")
})

app.listen(8080,()=>{
    console.log("Listening on 8080");
})