const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req,res) =>{
    res.send('Hello World')
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

module.exports=app;