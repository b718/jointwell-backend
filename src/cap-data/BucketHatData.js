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

const BH001 = new UpdatedCapModel({
  path: `Bucket Hat/BH001.jpg`,
  id: "BH001",
  name: "Bucket Hat 1",
  style: ["bucket"],
  decoration: [""],
});

const BH002 = new UpdatedCapModel({
  path: `Bucket Hat/BH002.jpg`,
  id: "BH002",
  name: "Bucket Hat 2",
  style: ["bucket"],
  decoration: [""],
});

const BH003 = new UpdatedCapModel({
  path: `Bucket Hat/BH003.jpg`,
  id: "BH003",
  name: "Bucket Hat 3",
  style: ["bucket"],
  decoration: ["embroidery"],
});

const BH004 = new UpdatedCapModel({
  path: `Bucket Hat/BH004.png`,
  id: "BH004",
  name: "Bucket Hat 4",
  style: ["bucket"],
  decoration: [""],
});

const BH005 = new UpdatedCapModel({
  path: `Bucket Hat/BH005.jpg`,
  id: "BH005",
  name: "Bucket Hat 5",
  style: ["bucket"],
  decoration: [""],
});

const BH006 = new UpdatedCapModel({
  path: `Bucket Hat/BH006.png`,
  id: "BH006",
  name: "Bucket Hat 6",
  style: ["bucket"],
  decoration: [""],
});

const insertDataBucketHat = async () => {
  await BH001.save();
  await BH002.save();
  await BH003.save();
  await BH004.save();
  await BH005.save();
  await BH006.save();
};

module.exports = insertDataBucketHat;
