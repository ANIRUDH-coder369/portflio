const mongoose = require("mongoose")

module.exports = mongoose.model("admin", new mongoose.Schema({
    email: { type: String, required: true, },
    password: { type: String, require: true },
    role: { type: String, default: "admin" },
}, { timestamps: true }))