const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('<h1>Dashboard Route</h1>')
})

module.exports = router