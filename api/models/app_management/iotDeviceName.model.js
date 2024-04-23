import mongoose from "mongoose";
const { Schema } = mongoose;

const IoTDeviceNamesSchema = new Schema({
    device_name: { type: String, required: true }
}, 
{ timestamps: true });

export default mongoose.model("IoTDeviceNames", IoTDeviceNamesSchema);
