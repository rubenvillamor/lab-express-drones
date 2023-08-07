const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model")

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const allDrones = await Drone.find()
    console.log(allDrones)
    res.render("drones/list.hbs", {
      allDrones: allDrones
    })
  } catch (error) {
    next(error)
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs")
  
  
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  // console.log("funciona")
  const {name, propellers, maxSpeed} = req.body
 try {
  const newDrone = await Drone.create({name, propellers, maxSpeed})
  res.redirect("/drones")
 } catch (error) {
  next(error)
 }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
try {
  const oneDrone = await Drone.findById(req.params.id)
  res.render("drones/update-form.hbs", {
    oneDrone
  })
} catch (error) {
  next(error)
}
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const upDrone = await Drone.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed
    

    }) 
    res.redirect("/drones")
  } catch (error) {
    next(error)
  }


});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    await Drone.findByIdAndDelete(req.params.id)
    res.redirect("/drones")
  } catch (error) {
    next(error)
  }
});

module.exports = router;
