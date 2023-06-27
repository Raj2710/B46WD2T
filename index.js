// console.log("Welcome to Node js")

// const os = require('os')
// console.log(os.hostname())
// console.log(os.homedir())
// console.log(os.freemem())
// console.log(os.cpus())
// console.log(os.uptime())

//Packages
//1. In Built Packages
//2. External packeges(npm)
//3. User developed packages

const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    let fileName = new Date()
    res.writeHead(200,{"Content-Type":"text/html"})
    fs.writeFile(`files/${fileName}.txt`,
    `Time is - ${new Date()}`,'utf-8',()=>{
        fs.readFile(`files/${fileName}.txt`,'utf-8',(error,data)=>{
            if(error)
                console.log(error)
            else
                res.end(data)
        })
    })
})

server.listen(8000,()=>console.log("Server is listening port 8000"))
