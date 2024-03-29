const mongoose = require("mongoose")

const UserModel = new mongoose.Schema({
    email :{
        type:String,
        require : true
    },
    password:{
        type:String,
        require : true
    },
    name:{
        type:String,
        require : true
    },
    number:{
        type:String,
        require : true
    },
    address:{
        type:String,
        require : true
    }
})

const User = mongoose.models.User || mongoose.model("User", UserModel)
export default User