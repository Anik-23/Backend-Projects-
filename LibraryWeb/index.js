const express=require("express");

const app= express();

const path=require("path");

const data=require("./data.json");

app.use(express.static(path.join(__dirname,'/public')))

app.set('view engine','ejs');

app.set('views',path.join(__dirname,'/views'))

app.get('/',(req,res)=>{
    res.render("home")
})




app.get('/signUp',(req,res)=>{
    res.render('signUp')
}) 

app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/allBooks', (req,res) => {
    res.render('allBooks', {...data});
})



app.get('*',(req,res)=>{
    res.send("That path is not recognised")
})

app.listen(8080,()=>{
    console.log("Listening on 8080");
})