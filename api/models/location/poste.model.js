import mongoose from "mongoose";
const { Schema } = mongoose;

const PostesSchema = new Schema({
    poste_name: { type: String, required: true },
    address: { type: String },
    city: { type: String },
    postal_code: { type: String },
    country: { type: String },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
}, 
{ timestamps: true });

export default mongoose.model("Postes", PostesSchema);