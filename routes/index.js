const express = require('express')
const mongoose = require('mongoose')
const {dbUrl} = require('../config/dbConfig')
const {UserModel} = require('../schema/UserScehema')
const router = express.Router()

mongoose.connect(dbUrl)

router.get('/',async (req,res)=>{
    try {
        let users = await UserModel.find()
        res
        .status(200)
        .send({
            message:"Data Fetch Successfull",
            users
        })
    } catch (error) {
        res
        .status(500)
        .send({
                message:"Internal Server Error"
            })
    }
})

router.get('/:id',async (req,res)=>{
    try {
        let data = await UserModel.findById(req.params.id)
        if(data)
        {
            res.status(200).send({
                message:"Data Fetch Successfull",
                data
            })
        }
        else
        {
            res.status(400).send({message:'Invalid Id'})
        }
    } catch (error) {
        res
        .status(500)
        .send({
                message:"Internal Server Error"
            })
    }
})

router.post('/',async (req,res)=>{
    try {
        let user = await UserModel.findOne({email:req.body.email})
        if(!user)
        {
            let newUser = await UserModel.create(req.body)
            res.status(200).send({message:"User Created Successfully"})
        }
        else
        {
            res.status(400).send({message:`User with ${req.body.email} already exists`})
        }

    } catch (error) {
        res
        .status(500)
        .send({
                message:"Internal Server Error",
                error: error?.message
            })
    }
})

router.put('/:id',async (req,res)=>{
    try {
        let user = await UserModel.findById(req.params.id)
        if(user)
        {
            user.name = req.body.name
            user.email = req.body.email
            user.password = req.body.password
            await user.save()
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
                message:"Internal Server Error",
                error:error?.message
            })
    }
})

router.delete('/:id',async (req,res)=>{
    try {
        let user = await UserModel.findByIdAndDelete(req.params.id)
        if(user)
        {
            res.status(200).send({
                message:"User Deleted Successfully"
            })
        }
        else
        {
            res.status(400).send({message:"Invalid User Id"})
        }
    } catch (error) {
        res
        .status(500)
        .send({
                message:"Internal Server Error"
            })
    }
})

module.exports = router