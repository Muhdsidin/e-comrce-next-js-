const bcrypt = require("bcrypt")
export async function POST (req){
    const data = await req.json()
    console.log(data)
    const {email , password , number , address ,name } = data

    const hashedPassword = await bcrypt.hash(password)
 // next setup will be tommoworw
    return Response.json({
        message:"successfully Signuped"
    })
}