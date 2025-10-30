const express=require('express')
const app= express()
const port = 8001

app.get('/', (req, res) => {
  res.send('Hey there! this is sowmiya')
})

app.listen(port,()=>{
    console.log('server started running on the port') }
)
