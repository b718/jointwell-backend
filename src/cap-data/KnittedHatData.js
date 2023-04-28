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

const KN001 = new UpdatedCapModel({
  path: `Knitted Hat/KN001.png`,
  id: "KN001",
  name: "Knitted Hat 1",
  style: ["knitted"],
  decoration: [""],
});

const KN002 = new UpdatedCapModel({
  path: `Knitted Hat/KN002.png`,
  id: "KN002",
  name: "Knitted Hat 2",
  style: ["knitted"],
  decoration: [""],
});

const KN003 = new UpdatedCapModel({
  path: `Knitted Hat/KN003.png`,
  id: "KN003",
  name: "Knitted Hat 3",
  style: ["knitted"],
  decoration: [""],
});

const KN004 = new UpdatedCapModel({
  path: `Knitted Hat/KN004.png`,
  id: "KN004",
  name: "Knitted Hat 4",
  style: ["knitted"],
  decoration: [""],
});

const KN005 = new UpdatedCapModel({
  path: `Knitted Hat/KN005.png`,
  id: "KN005",
  name: "Knitted Hat 5",
  style: ["knitted"],
  decoration: [""],
});

const KN006 = new UpdatedCapModel({
  path: `Knitted Hat/KN006.png`,
  id: "KN006",
  name: "Knitted Hat 6",
  style: ["knitted"],
  decoration: [""],
});

const insertDataKnittedHat = async () => {
  await KN001.save();
  await KN002.save();
  await KN003.save();
  await KN004.save();
  await KN005.save();
  await KN006.save();
};

module.exports = insertDataKnittedHat;
