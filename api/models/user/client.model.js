import mongoose from "mongoose";
const { Schema } = mongoose;

const ClientSchema = new Schema({
    client_name: { type: String, required: true },
    address: { type: String },
    city: { type: String },
    postal_code: { type: String },
    country: { type: String },
    contact_name: { type: String },
    contact_email: { type: String },
    contact_phone: { type: String },
    id_user: { type: mongoose.Schema.Types.ObjectId, required: true }
}, 
{ timestamps: true });

export default mongoose.model("Client", ClientSchema);
