const mongoose= require('mongoose')

const urlSchema = new mongoose.Schema({
    short_id : {
        type:String,
        required:true,
        unique:true
    },
    redirect_url :{
        type:String,
        unique:true,
        required:true
    }
})

const URL= mongoose.model('url',urlSchema)

module.exports = URL