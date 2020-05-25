const express= require('express')
const bodyParser=require('body-parser')
const userRouter=express.Router();
const Users=require('../models/users')

userRouter.use(bodyParser.json());

userRouter.get('/',(req,res)=>{
    Users.find({}).then(users=>{
        res.statusCode=200;
        res.setHeader('Content-Type','applications/json');
        res.json(users); 
    },err=>{err=>next(err)})
    .catch(err=>{next(err)})
})

userRouter.get('/getUser',(req,res)=>{
    Users.find({name:req.query.name,password:req.query.password}).then(user=>{
        res.statusCode=200;
        res.setHeader('Content-Type','applications/json');
        res.json(user); 
    },err=>{err=>next(err)})
    .catch(err=>{next(err)})
})

userRouter.post('/registerUser',(req,res)=>{
    Users.findOne({email:req.body.email})
    .then(userDoc=>{
        if(userDoc){
            res.end("User Already Exists") ;
        }
        const user=new Users({
            name:req.body.name,
            password:req.body.password,
            contact:req.body.contact,
            email:req.body.email
        })
        return user.save();
    })
    .then(result=>{
        res.json(result);
    })
    .catch(err=>{
        console.log(err);
    })

})

module.exports=userRouter;
