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

const BC008 = new UpdatedCapModel({
  path: `Washing/BC008.png`,
  id: "BC008",
  name: "Washing Head 8",
  style: ["caps"],
  decoration: ["washing"],
});

const BC011 = new UpdatedCapModel({
  path: `Washing/BC011.png`,
  id: "BC011",
  name: "Washing Head 11",
  style: ["caps"],
  decoration: ["washing"],
});

const BC012 = new UpdatedCapModel({
  path: `Washing/BC012.png`,
  id: "BC012",
  name: "Washing Head 12",
  style: ["caps"],
  decoration: ["washing"],
});

const insertDataWashingHat = async () => {
  await BC008.save();
  await BC011.save();
  await BC012.save();
};

module.exports = insertDataWashingHat;
