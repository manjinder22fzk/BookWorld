const express =require('express');
const app=express();
http=require('http');
const mongoose=require('mongoose')
const morgan =require('morgan')
const bodyParser=require('body-parser');
const BookRouter=require('./routes/bookRouter');
const UserRouter=require('./routes/userRouter');

const url = 'mongodb://localhost:27017/books';
const connect = mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PUT,PATCH,DELETE,OPTIONS"
    );
    next()
});

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/books',BookRouter)
app.use('/users',UserRouter)


const server = http.createServer(app);
server.listen(3000,()=>{
    console.log("Serve is Listening at Port 3000");
});