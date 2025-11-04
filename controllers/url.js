const {nanoid}= require("nanoid")


const URL=require("../models/url")

async function generateShortUrl(req,res)
{
    const body= req.body
    if(!body.url) return res.status(400).json({error:'url is required'})
    const shortId= nanoid(8)
    await URL.create(
        {
            short_id:shortId,
            redirect_url:body.url
        }
    )

    return res.json({id:shortId})
}

module.exports={generateShortUrl}