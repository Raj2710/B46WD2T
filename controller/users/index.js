const data = [
    {
        name:"Deva"
    },
    {
        name:'Ajith'
    },
    {
        name:'Indu'
    },
    {
        name:'Harshan'
    }
]
exports.getUser = function(req,res){
    res.send({
        message:"Sample endpoint to demonstrate MVC pattern",
        data
    })
}