const express= require('express')
const bodyParser=require('body-parser')
const bookRouter=express.Router();
const Books=require('../models/books')
const passport = require('passport');

bookRouter.use(bodyParser.json());


bookRouter.get('/',(req,res)=>{
    Books.find({}).then(books=>{
        res.statusCode=200;
        res.setHeader('Content-Type','applications/json');
        res.json(books);        
    },err=>{err=>next(err)})
    .catch(err=>{next(err)})
})

bookRouter.get('/authors',(req,res)=>{
    Books.distinct("author").then(authors=>{
        res.statusCode=200;
        res.setHeader('Content-Type','applications/json');
        res.json(authors);
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

bookRouter.get('/categories',(req,res)=>{
    Books.distinct("category").then(categories=>{
        res.statusCode=200;
        res.setHeader('Content-Type','applications/json');
        res.json(categories);
    },err=>{err=>next(err)})
    .catch(err=>{next(err)})
})

bookRouter.get('/categories/:category',(req,res)=>{
    Books.find({category:req.params.category}).then(books=>{
        res.statusCode=200;
        res.setHeader('Content-Type','applications/json');
        res.json(books);
    },err=>{next(err)})
    .catch(err=>next(err))
})

bookRouter.get('/buy/:name',passport.authenticate('jwt', {session:false}),(req,res,next)=>{
    res.status(201).json({buy:"You want to buy "+req.params.name});
});

module.exports=bookRouter;

