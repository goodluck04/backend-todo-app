import mongoose from "mongoose";


const Connection = async () => {
    
    console.log("database is successfully connected");
    try {
        // useUnifiedTopology -> new way of structure 
        await mongoose.connect(process.env.MONGO_DB, {useUnifiedTopology: true,useNewUrlParser: true});
    } catch(error) {
        console.log('Error while connecting database ', error);
    }
}
export default Connection;