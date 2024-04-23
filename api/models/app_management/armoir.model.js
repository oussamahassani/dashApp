import mongoose from "mongoose";
const { Schema } = mongoose;

const ArmoireSchema = new Schema({
    NOM_ARMR: { type: String, required: true },
    ETAT_BP_AU: { type: String, required: true },
    ETAT_SECTIONNEUR: { type: String, required: true },
    ETAT_FUSIBLE: { type: String, required: true },
    ETAT_DISJONCTEUR: { type: String, required: true },
    ETAT_RELAIS: { type: String, required: true },
    ETAT_KM1: { type: String, required: false }, // Can be null
    ETAT_KM2: { type: String, required: true },
    ETAT_CONTACT_AUXILIARE: { type: String, required: true },
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

export default mongoose.model("Armoire", ArmoireSchema);
