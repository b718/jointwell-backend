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

const PA001 = new UpdatedCapModel({
  path: `Patches/PA001.jpg`,
  id: "PA001",
  name: "Patches Hat 1",
  style: ["caps"],
  decoration: ["patches"],
});

const PA002 = new UpdatedCapModel({
  path: `Patches/PA002.jpg`,
  id: "PA002",
  name: "Patches Hat 2",
  style: ["caps"],
  decoration: ["patches"],
});

const PA003 = new UpdatedCapModel({
  path: `Patches/PA003.jpg`,
  id: "PA003",
  name: "Patches Hat 3",
  style: ["caps"],
  decoration: ["patches", "woven"],
});

const PA004 = new UpdatedCapModel({
  path: `Patches/PA004.jpg`,
  id: "PA004",
  name: "Patches Hat 4",
  style: ["caps"],
  decoration: ["patches"],
});

const insertDataPatchesHat = async () => {
  await PA001.save();
  await PA002.save();
  await PA003.save();
  await PA004.save();
};

module.exports = insertDataPatchesHat;
