const UpdatedCapModel = require("../models/UpdatedCapModel");

// const ClientSchema = new Schema({
//     path: String,
//     id: String,
//     name: String,
//     style: [String],
//     material: [String],
//     decoration: [String],
//   });

// const newCap = new CapModel({
//     path: "../Images/hat-pic.png",
//     id: "0-001",
//     name: "Hat Name",
//     style: ["test1"],
//   });
//  const savedCap = await newCap.save();

const OC004 = new UpdatedCapModel({
  path: `Woven Label/OC004.png`,
  id: "OC004",
  name: "Woven Label 1",
  style: ["other"],
  decoration: ["woven label"],
});

// const PA003 = new UpdatedCapModel({
//   path: `Woven Label/PA003.jpg`,
//   id: "PA003",
//   name: "Woven Label 2",
//   style: ["woven label", "patches", "caps"],
// //   decoration: [""],
// });

const insertDataWovenLabel = async () => {
  await OC004.save();
  //await PA003.save();
};

module.exports = insertDataWovenLabel;
