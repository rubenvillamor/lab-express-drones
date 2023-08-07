// Iteration #1
const mongoose = require("mongoose");


const Drone = require("../models/Drone.model")

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];



mongoose.connect("mongodb://127.0.0.1:27017/lab-express-drones")
.then(() => {
console.log("conectado")
return Drone.insertMany(drones)
})
.catch((error) => {
    next(error)
})