import mongoose from "mongoose";
const { Schema } = mongoose;

const IoTDeviceSchema = new Schema({
    idslave: { type: String, required: true },
    device_name: { type: String, required: true },
    device_type: { type: String },
    manufacturer: { type: String },
    location: { type: String },
    description: { type: String },
    is_connected: { type: Boolean, default: false }
}, 
{ timestamps: true });

export default mongoose.model("IoTDevice", IoTDeviceSchema);
