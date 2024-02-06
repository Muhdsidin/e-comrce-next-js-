const bcrypt = require("bcrypt")
export async function POST (req){
    const data = await req.json()
    console.log(data)
    const {password , email} = data
 return Response.json({
    message:"SuccessFully Logged"
 })
}