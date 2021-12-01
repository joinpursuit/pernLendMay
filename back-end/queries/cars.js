const db = require("../db/dbConfig");

const getAllDatas = async (uid) => {
  try {
    const query = "SELECT * FROM test WHERE uid=$1";
    const allDatas = await db.any(query, uid);
    return { status: true, payload: allDatas };
  } catch (error) {
    return { status: false, payload: error };
  }
};

// const getData = async (id, uid) => {
//   try {
//     const query = "SELECT * FROM test WHERE id=$1 and uid=$2";
//     const Data = await db.one(query, [id, uid]);
//     return { status: true, payload: Data };
//   } catch (error) {
//     return { status: false, payload: error };
//   }
// };

// const addData = async (Data) => {
//   const { make, model, vin, year, odometer, doors, is_default, uid, driver } =
//     Data;
//   try {
//     const query =
//       "INSERT INTO Datas (make, model, vin, year) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *";
//     const newData = await db.one(query, [
//       make,
//       model,
//       vin,
//       year,
//     ]);
//     return { status: true, payload: newData };
//   } catch (error) {
//     return { status: false, payload: error };
//   }
// };

// const deleteData = async (id, uid) => {
//   try {
//     const query = "DELETE FROM test WHERE id=$1 AND uid=$2 RETURNING *";
//     const deletedData = await db.one(query, [id, uid]);
//     return { status: true, payload: deletedData };
//   } catch (error) {
//     return { status: false, payload: error };
//   }
// };

// const updateData = async (id, body, uid) => {
//   const { make, model, vin, year, odometer, doors, is_default, driver } = body;
//   const queryOne = "SELECT * FROM test WHERE uid=$1 AND id=$2";
//   const authCheck = await db.any(queryOne, [uid, id]);
//   if (authCheck.length) {
//     try {
//       const query =
//         "UPDATE Datas SET make=$1, model=$2, vin=$3, year=$4, odometer=$5, doors=$6, is_default=$7,driver=$8, uid=$9  WHERE id=$10 RETURNING *";
//       const updatedData = await db.one(query, [
//         make,
//         model,
//         vin,
//         year,
//         odometer,
//         doors,
//         is_default,
//         driver,
//         uid,
//         id,
//       ]);
//       return { status: true, payload: updatedData };
//     } catch (error) {
//       return { status: false, payload: error };
//     }
//   } else {
//     return { status: false, payload: "user doesn't match" };
//   }
// };

module.exports = { getAllDatas};
// , getData, addData, deleteData, updateData 