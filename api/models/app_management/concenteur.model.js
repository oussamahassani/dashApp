import mongoose from "mongoose";
const { Schema } = mongoose;

const ConcentrateurSchema = new Schema({
    id_poste: { type: String, required: true },
    concentrateur_name: { type: String, required: true },
    address: { type: String },
    city: { type: String },
    postal_code: { type: String },
    country: { type: String },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    "concentrateur name": { type: String, required: true } // Note: You have a space in the field name
}, 
{ timestamps: true });

export default mongoose.model("Concentrateur", ConcentrateurSchema);
