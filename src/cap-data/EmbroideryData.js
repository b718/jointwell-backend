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

const EB001 = new UpdatedCapModel({
  path: `Embroidery/EB001.jpg`,
  id: "EB001",
  name: "Embroidery Hat 1",
  style: ["caps"],
  decoration: ["embroidery"],
});

const EB002 = new UpdatedCapModel({
  path: `Embroidery/EB002.jpg`,
  id: "EB002",
  name: "Embroidery Hat 2",
  style: ["caps"],
  decoration: ["embroidery"],
});

const insertDataEmbroideryHat = async () => {
  await EB001.save();
  await EB002.save();
};

module.exports = insertDataEmbroideryHat;
