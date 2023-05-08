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

const OC001 = new UpdatedCapModel({
  path: `Other/OC001.jpg`,
  id: "OC001",
  name: "Other Hat 1",
  style: ["other"],
  decoration: [""],
});

const OC002 = new UpdatedCapModel({
  path: `Other/OC002.png`,
  id: "OC002",
  name: "Other Hat 2",
  style: ["other"],
  decoration: ["embroidery"],
});

const OC003 = new UpdatedCapModel({
  path: `Other/OC003.jpg`,
  id: "OC003",
  name: "Other Hat 3",
  style: ["other"],
  decoration: ["embroidery"],
});

// const OC004 = new UpdatedCapModel({
//   path: `Other/OC004.png`,
//   id: "OC004",
//   name: "Other Hat 4",
//   style: ["other"],
// //   decoration: [""],
// });

const OC005 = new UpdatedCapModel({
  path: `Other/OC005.png`,
  id: "OC005",
  name: "Other Hat 5",
  style: ["other"],
  decoration: [""],
});

const OC006 = new UpdatedCapModel({
  path: `Other/OC006.png`,
  id: "OC006",
  name: "Other Hat 6",
  style: ["other"],
  decoration: ["embroidery"],
});

const insertDataOtherHat = async () => {
  await OC001.save();
  await OC002.save();
  await OC003.save();
  //await OC004.save();
  await OC005.save();
  await OC006.save();
};

module.exports = insertDataOtherHat;
