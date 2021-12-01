const express = require("express");
const datas = express.Router();
const {
  getAllDatas,

} = require("../queries/cars");



datas.get("/", async (req, res) => {
  const uid = req.query.uid;
  try {
    const allDatas = await getAllDatas(uid);
    res.json(allDatas);
  } catch (error) {
    return error;
  }
});

// Datas.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   const uid = req.query.uid;
//   try {
//     const Data = await getData(id, uid);
//     res.json(Data);
//   } catch (error) {
//     return error;
//   }
// });

// Datas.post("/", async (req, res) => {
//   try {
//     const Datas = await addData(req.body);
//     res.json(Datas);
//   } catch (error) {
//     return error;
//   }
// });

// Datas.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   const uid = req.query.uid;
//   try {
//     const Data = await deleteData(id, uid);
//     res.json(Data);
//   } catch (error) {
//     return error;
//   }
// });

// Datas.put("/:id", async (req, res) => {
//   const { body, params } = req;
//   const { id } = params;
//   const uid = req.query.uid;
//   try {
//     const Data = await updateData(id, body, uid);
//     res.json(Data);
//   } catch (error) {
//     return error;
//   }
// });

module.exports = datas;

// Heroku CLI
// heroku pg:psql postgresql-solid-18526 --app powerful-depths-91395


// \i ./db/schema.sql
// success should say CREATE TABLE
// \i ./db/seed.sql
// success should say INSERT 0 7
// \q