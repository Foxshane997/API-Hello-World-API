const { model } = require("mongoose")

// Requirement
const mongoose = require 
const { Schema } = mongoose

// Schema
const languageSchema = new Schema ({
    name: { type: String, required: true},
    greeting: String,
    pangram: String,
    filler: String
})

// Model & Export
const Language = mongoose.model('Language', languageSchema)
model.exports = Language