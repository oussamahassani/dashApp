import mongoose from "mongoose";
const { Schema } = mongoose;

const AddressSchema = new Schema({
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    address: { type: String, required: true },
    rue: { type: String, required: true },
    cite: { type: String, required: true },
    gouvernorat: { type: String, required: true },
    code_zip: { type: String, required: true },
    country: { type: String, required: true },
    device_type: { type: String, required: true }
}, 
{ timestamps: true });

export default mongoose.model("Address", AddressSchema);
