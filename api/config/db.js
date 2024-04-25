import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.set('strictQuery', true);
//connect
const connect = () => {
    try {
        mongoose.connect(process.env.MONGO)
            .then(console.log("database connected !!!"))
    } catch (error) {
        console.log("connection failed")
        console.log(error.message);
    }
}

export default connect;