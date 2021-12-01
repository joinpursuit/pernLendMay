const express = require("express");
const cars = express.Router();
const {
  getAllCars,
  getCar,
  addCar,
  deleteCar,
  updateCar,
} = require("../queries/cars");



cars.get("/", async (req, res) => {
  const uid = req.query.uid;
  try {
    const allCars = await getAllCars(uid);
    res.json(allCars);
  } catch (error) {
    return error;
  }
});

cars.get("/:id", async (req, res) => {
  const { id } = req.params;
  const uid = req.query.uid;
  try {
    const car = await getCar(id, uid);
    res.json(car);
  } catch (error) {
    return error;
  }
});

cars.post("/", async (req, res) => {
  try {
    const cars = await addCar(req.body);
    res.json(cars);
  } catch (error) {
    return error;
  }
});

cars.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const uid = req.query.uid;
  try {
    const car = await deleteCar(id, uid);
    res.json(car);
  } catch (error) {
    return error;
  }
});

cars.put("/:id", async (req, res) => {
  const { body, params } = req;
  const { id } = params;
  const uid = req.query.uid;
  try {
    const car = await updateCar(id, body, uid);
    res.json(car);
  } catch (error) {
    return error;
  }
});

module.exports = cars;

// Heroku CLI
// heroku pg:psql postgresql-solid-18526 --app powerful-depths-91395


// \i ./db/schema.sql
// success should say CREATE TABLE
// \i ./db/seed.sql
// success should say INSERT 0 7
// \q