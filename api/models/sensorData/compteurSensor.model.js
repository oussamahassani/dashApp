import mongoose from "mongoose";
const { Schema } = mongoose;

const CompteurSensorsSchema = new Schema({
    ID_ligne: { type: String, required: true },
    NOM_ligne: { type: String, required: true },
    ID_POSTE: { type: String, required: true },
    DATE: { type: String, required: true },
    TIME: { type: String, required: true },
    ETAT_TRNSFO: { type: String, required: true },
    ETAT_SECTIONNEUR: { type: String, required: true },
    ETAT_FUSIBLE: { type: String, required: true },
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

export default mongoose.model("CompteurSensors", CompteurSensorsSchema);
