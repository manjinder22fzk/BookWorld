const express= require('express')
const bodyParser=require('body-parser')
const bookRouter=express.Router();
const Books=require('../models/books')
const bookObj=require('../assets/bookObj');

bookRouter.use(bodyParser.json());

bookRouter.use((req,res,next)=>{
    Books.deleteMany({}).then(out=>{
        Books.create(bookObj).then(data=>{
            next();
        });
    });
})

bookRouter.get('/',(req,res)=>{
    Books.find({}).then(books=>{
        res.statusCode=200;
        res.setHeader('Content-Type','applications/json');
        res.json(books);        
    },err=>{err=>next(err)})
    .catch(err=>{next(err)})
})

bookRouter.get('/authors/:author',(req,res)=>{
    Books.find({author:req.params.author}).then(books=>{
        res.statusCode=200;
        res.setHeader('Content-Type','applications/json');
        res.json(books);
    },err=>{next(err)})
    .catch(err=>next(err))
})

bookRouter.get('/categories/:category',(req,res)=>{
    Books.find({category:req.params.category}).then(books=>{
        res.statusCode=200;
        res.setHeader('Content-Type','applications/json');
        res.json(books);
    },err=>{next(err)})
    .catch(err=>next(err))
})


module.exports=bookRouter;

