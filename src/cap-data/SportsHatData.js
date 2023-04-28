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

const SH001 = new UpdatedCapModel({
  path: `Sports Hat/SH001.jpg`,
  id: "SH001",
  name: "Sports Hat 1",
  style: ["sports"],
  decoration: [""],
});

const SH002 = new UpdatedCapModel({
  path: `Sports Hat/SH002.jpg`,
  id: "SH002",
  name: "Sports Hat 2",
  style: ["sports"],
  decoration: [""],
});

const SH003 = new UpdatedCapModel({
  path: `Sports Hat/SH003.jpg`,
  id: "SH003",
  name: "Sports Hat 3",
  style: ["sports"],
  decoration: [""],
});

const SH004 = new UpdatedCapModel({
  path: `Sports Hat/SH004.png`,
  id: "SH004",
  name: "Sports Hat 4",
  style: ["sports"],
  decoration: [""],
});

const insertDataSportsHat = async () => {
  await SH001.save();
  await SH002.save();
  await SH003.save();
  await SH004.save();
};

module.exports = insertDataSportsHat;
