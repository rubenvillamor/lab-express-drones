// Iteration #1
const mongoose = require("mongoose")

// Crear Schema

const droneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number

})

const Drone = mongoose.model("Drone", droneSchema)

// Exportar modelo.

module.exports = Drone;