const express = require('express')
const router = express.Router()
const {mongodb,dbName,dbUrl} = require('../config/dbConfig')

const MongoClient = mongodb.MongoClient
const client = new MongoClient(dbUrl)


router.get('/',async (req,res)=>{
    await client.connect()
    try {
        let db = await client.db(dbName)
        let data = await db.collection('users').find().toArray()
        res
        .status(200)
        .send({
            message:"Data Fetch Successfull",
            data
        })
    } catch (error) {
        res
        .status(500)
        .send({
                message:"Internal Server Error"
            })
    }
    finally{
        client.close()
    }
})

router.get('/:id',async (req,res)=>{
    await client.connect()
    try {
        let db = await client.db(dbName)
        let data = await db.collection('users').findOne({_id: new mongodb.ObjectId(req.params.id)})
        if(data)
        {
            res
            .status(200)
            .send({
                message:"Data Fetch Successfull",
                data
            })
        }
        else
        {
            res
            .status(400)
            .send({message:'Invalid Id'})
        }
    } catch (error) {
        res
        .status(500)
        .send({
                message:"Internal Server Error"
            })
    }
    finally{
        client.close()
    }
})

router.post('/',async (req,res)=>{
    await client.connect()
    try {
        let db = await client.db(dbName)
        let data = await db.collection('users').insertOne(req.body)
        res
        .status(200)
        .send({
            message:"Data Saved Successfully",
        })
    } catch (error) {
        res
        .status(500)
        .send({
                message:"Internal Server Error"
            })
    }
    finally{
        client.close()
    }
})

router.put('/:id',async (req,res)=>{
    await client.connect()
    try {
        let db = await client.db(dbName)
        let data = await db.collection('users').updateOne({_id: new mongodb.ObjectId(req.params.id)},{$set:req.body})
        res
        .status(200)
        .send({
            message:"User Updated Successfully"
        })
    } catch (error) {
        console.log(error)
        res
        .status(500)
        .send({
                message:"Internal Server Error"
            })
    }
    finally{
        client.close()
    }
})

router.delete('/:id',async (req,res)=>{
    await client.connect()
    try {
        let db = await client.db(dbName)
        let data = await db.collection('users').deleteOne({_id: new mongodb.ObjectId(req.params.id)})
        res
        .status(200)
        .send({
            message:"User Deleted Successfully"
        })
    } catch (error) {
        res
        .status(500)
        .send({
                message:"Internal Server Error"
            })
    }
    finally{
        client.close()
    }
})
module.exports = router