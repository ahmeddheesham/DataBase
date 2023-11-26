const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carSchema = new Schema({
    model: String,
    color: String,
    year: Number
})

module.exports = mongoose.model('cars', carSchema)