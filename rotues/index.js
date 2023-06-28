const express = require('express')
const router = express.Router()
const {getUser} = require('../controller/users/index')

router.get('/',getUser)

module.exports = router