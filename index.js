// console.log("Backend");

require('dotenv').config();
const express=require("express");
const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/twitter',(req,res)=>{
    res.send("shashankjaina");
})

app.get('/login',(req,res)=>{
    res.send("<h1>please login here</h1>");
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>shashankjaina</h2>");
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})