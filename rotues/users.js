const express = require('express')
const router = express.Router()

const users = [
    {
        name:"Deva",
        email:"deva@gmail.com",
        password:"Admin@123",
        role:"student"
    },
    {
        name:'Ajith',
        email:"ajith@gmail.com",
        password:"Admin@123",
        role:"student"

    },
    {
        name:'Indu',
        email:"indu@gmail.com",
        password:"Admin@123",
        role:"student"
    },
    {
        name:'Harshan',
        email:"harshan@gmail.com",
        password:"Admin@123",
        role:"student"
    }
]

router.get('/',(req,res)=>{
    res
    .status(200)
    .send({
        message:"Data Fetched Successfully",
        data:users
    })
})

router.get('/:id',(req,res)=>{
    if(Number(req.params.id)<users.length){
        res
        .status(200)
        .send({
            message:'User Data Fetch Successfull',
            data:users[req.params.id]
        })
    }
    else
    {
        res
        .status(400)
        .send({
            message:'User Not Found'
        })
    }
})

router.post('/',(req,res)=>{
    users.push(req.body)
    res
    .status(200)
    .send({
        message:"User Saved Successfuly"
    })
})

router.put('/:id',(req,res)=>{
    if(Number(req.params.id)<users.length){
        users.splice(req.params.id,1,req.body)
        // users[req.params.id].name = req.body.name
        res
        .status(200)
        .send({
            message:'User Data Fetch Successfull',
            data:users[req.params.id]
        })
    }
    else
    {
        res
        .status(400)
        .send({
            message:'User Not Found'
        })
    }
})

router.delete('/:id',(req,res)=>{
    if(Number(req.params.id)<users.length){
        users.splice(req.params.id,1)
        res
        .status(200)
        .send({
            message:'User Data Deleted Successfully',
        })
    }
    else
    {
        res
        .status(400)
        .send({
            message:'User Not Found'
        })
    }
})
module.exports = router