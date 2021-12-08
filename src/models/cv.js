const mongoose = require("mongoose")

const Cv = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    name: { type: String, required: true },
    endereco: { type: String, required: true },
    telefone: { type: String, required: true },
    email: { type: String, required: true },
    nascimento: { type: String, required: true },
    nacionalidade: { type: String, required: true },
    estadocivil: { type: String, required: true },

    fileName: { type: String, required: true }
}, {
    timestamps: true,
})

mongoose.model("Cv", Cv)