import mongoose from "mongoose";
const { Schema } = mongoose;

const SolarPanelSchema = new Schema({
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    idpannel: { type: String, required: true },
    tension: { type: Number, required: true },
    courant: { type: Number, required: true },
    production: { type: Number, required: true },
    irradiation: { type: Number, required: true },
    etatBatteries: { type: String, required: true },
    gestionEnergie: { type: String, required: true }
}, 
{ timestamps: true });

export default mongoose.model("SolarPanel", SolarPanelSchema);
