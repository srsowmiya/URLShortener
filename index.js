const express=require('express')
const urlRoutes=require('./routes/url')
const connectDB=require('./connect')
const app= express()
const port = 8001

const cors = require('cors');


app.use(cors())
app.use(express.json());

connectDB("mongodb://127.0.0.1:27017/urlShortener");


app.use("/url", urlRoutes);

app.listen(port, () => {
  console.log(` Server started on port ${port}`);
});
