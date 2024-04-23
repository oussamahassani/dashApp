import mongoose from "mongoose";
const { Schema } = mongoose;

const PosteSensorsSchema = new Schema({
    id_poste: { type: String, required: true },
    LATITUDE: { type: String, required: true },
    LONGITUDE: { type: String, required: true },
    ETAT_BECHOLTZ2: { type: String, required: true },
    ETAT_SECTIONNEUR: { type: String, required: true },
    ETAT_FUSIBLE: { type: String, required: true },
    ETAT_DISJONCTEUR: { type: String, required: true },
    ETAT_RELAIS: { type: String, required: true },
    ETAT_KM1: { type: String },
    ETAT_KM2: { type: String, required: true },
    ETAT_BECHOLTZ1: { type: String, required: true },
    TENSION_PHASE_1: { type: String, required: true },
    TENSION_PHASE_2: { type: String, required: true },
    TENSION_PHASE_3: { type: String, required: true },
    COURANT_PHASE_1: { type: String, required: true },
    COURANT_PHASE_2: { type: String, required: true },
    COURANT_PHASE_3: { type: String, required: true },
    FREQUENCE: { type: String, required: true },
    HUMIDITE: { type: String, required: true },
    TEMPERATURE: { type: String, required: true }
}, 
{ timestamps: true });

export default mongoose.model("PosteSensors", PosteSensorsSchema);
