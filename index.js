const express = require('express')
const app = express()
const indexRouter = require('./rotues/index')
const userRouter = require('./rotues/users')
const dashboardRouter = require('./rotues/dashboard')
const PORT = 8000

app.use(express.json())//to parse the body.
//example to show to handle multiple routes
app.use('/',indexRouter)
app.use('/users',userRouter)
app.use('/dashboard',dashboardRouter)

app.listen(PORT,()=>console.log(`App running in port ${PORT}`))