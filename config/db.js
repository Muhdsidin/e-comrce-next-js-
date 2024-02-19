import mongoose from "mongoose"
const MONGO_DB_URL = process.env.URL || 'mongodb+srv://bsidin79:bz5ZcsnoVMOlKcic@zedro.zemllqv.mongodb.net/?retryWrites=true&w=majority';

export default async function ConnectMongoDB (){
    try {
        await mongoose.connect(MONGO_DB_URL)
    } catch (error) {
        throw new Error("database issue ")
    }
}
