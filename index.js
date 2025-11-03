const express=require('express')
const urlRoutes=require('./routes/url')
const connectDB=require('./connect')
const app= express()
const port = 8001


 connectDB('mongodb://localhost/27027/short-url')
 


app.use('/url',urlRoutes)
app.listen(port,()=>{
    console.log('server started running on the port') }
)
