import mongoose from "mongoose";
const { Schema } = mongoose;

const LampesSensorsSchema = new Schema({
    ID_LAMPE: { type: String, required: true },
    DATE: { type: String, required: true },
    TIME: { type: String, required: true },
    AIR_QUALITY: { type: String, required: true },
    TENSION: { type: String, required: true },
    ETAT_LAMPE: { type: String, required: true },
    NIV_LIGHT: { type: String, required: true },
    COURANT: { type: String, required: true },
    FREQUENCE: { type: String, required: true },
    HUMIDITE: { type: String, required: true },
    TEMPERATURE: { type: String, required: true },
    is_connected: { type: Number, required: true }
}, 
{ timestamps: true });

export default mongoose.model("LampesSensors", LampesSensorsSchema);
