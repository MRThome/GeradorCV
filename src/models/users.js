const mongoose = require("mongoose")

const Users = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {type: String, enum: ["user", "empresa", "admin"], default: 'user'}
}, {
    timestamps: true,
})

mongoose.model("Users", Users)