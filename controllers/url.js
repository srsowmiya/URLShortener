const {}= require("nanoid")


const URL=require("../models/url")

async function generateShortUrl(req,res)
{
    const body= req.body
    if(!body.url) return res.status(400).json({erros:'url is required'})
    const shorid= nanoid(8)
    await URL.create(
        {
            short_id:shorid,
            redirect_url:body.url
        }
    )

    return res.json({id:shortid})
}

module.exports={generateShortUrl}