const exp = require("constants");
const express=require("express");
const app=express();
const path=require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');



app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));

let comments=[
    {
        id:uuidv4(),
        username:'Anik',
        comment:'You are so beautiful'
    },
    {
        id:uuidv4(),
        username:'Aniket',
        comment:'LOLOLO!!!!'
    },
    {
        id:uuidv4(),
        username:'Gautum',
        comment:'My nick name hahaha!!'
    },
    {
        id:uuidv4(),
        username:'Yash',
        comment:'Name of a devil'
    }
]

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})

app.post('/comments',(req,res)=>{
    const { username,comment }=req.body;
    comments.push({username,comment,id:uuidv4()});
    res.redirect('/comments');
})

app.get('/comments/:id',(req,res)=>{
    const {id}=req.params;
    res.render('comments/show',{sid:id,comments:comments});
})

app.get('/comments/:id/edit',(req,res)=>{
    const { id }=req.params;
    const comment=comments.find(c=> c.id === id);

    res.render('comments/edit',{ comment });
})

app.patch('/comments/:id',(req,res)=>{
    const { id }=req.params;
    const newCommentText = req.body.comment;
    const foundComment=comments.find(c=> c.id===id);
    foundComment.comment=newCommentText;
    res.redirect('/comments')
})

app.delete('/comments/:id',(req,res)=>{
    const {id}= req.params;
    comments=comments.filter(c=>c.id !== id );
    res.redirect('/comments');
})

app.listen(3000,()=>{
    console.log("Listining on 3000")
})
app.post('/tacos',(req,res)=>{
    const { meat , qty } =req.body;
    res.send(`here is your ${qty} ${meat} tacos`)
})
app.get('/tacos',(req,res)=>{
    res.send("Get/tacos Response")
})