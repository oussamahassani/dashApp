import mongoose from "mongoose";
const { Schema } = mongoose;

const SensorDataSchema = new Schema({
    id_dht: { type: String, required: true },
    temperature: { type: Number },
    humidity: { type: Number },
    timestamp: { type: Date }
}, 
{ timestamps: true });

export default mongoose.model("SensorData", SensorDataSchema);
