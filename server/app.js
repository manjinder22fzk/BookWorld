const express =require('express');
const app=express();
http=require('http');
const mongoose=require('mongoose')
const morgan =require('morgan')
const bodyParser=require('body-parser');
const BookRouter=require('./routes/bookRouter');

const url = 'mongodb://localhost:27017/books';
const connect = mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/books',BookRouter)





const server = http.createServer(app);
server.listen(3000,()=>{
    console.log("Serve is Listening at Port 3000");
});