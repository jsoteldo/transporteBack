import mongoose from "mongoose";

const campoSchema = new mongoose.Schema({
    field: String,
    headerName: String,
    width: Number,
  });


const objetosSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    campos: [campoSchema]
});

export default mongoose.model('objetos',objetosSchema);