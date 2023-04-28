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

const VC001 = new UpdatedCapModel({
  path: `Visors/VC001.png`,
  id: "VC001",
  name: "Visor 1",
  style: ["visors"],
  decoration: [""],
});

const VC002 = new UpdatedCapModel({
  path: `Visors/VC002.png`,
  id: "VC002",
  name: "Visor 2",
  style: ["visors"],
  decoration: [""],
});

const VC003 = new UpdatedCapModel({
  path: `Visors/VC003.png`,
  id: "VC003",
  name: "Visor 3",
  style: ["visors"],
  decoration: [""],
});

const VC004 = new UpdatedCapModel({
  path: `Visors/VC004.jpg`,
  id: "VC004",
  name: "Visor 4",
  style: ["visors"],
  decoration: [""],
});

// const VC005 = new UpdatedCapModel({
//   path: `Visors/VC005.png`,
//   id: "VC005",
//   name: "Visor 5",
//   style: ["visors"],
// //   decoration: [""],
// });

const VC006 = new UpdatedCapModel({
  path: `Visors/VC006.png`,
  id: "VC006",
  name: "Visor 6",
  style: ["visors"],
  decoration: [""],
});

const insertDataVisorsHat = async () => {
  await VC001.save();
  await VC002.save();
  await VC003.save();
  await VC004.save();
  //await VC005.save();
  await VC006.save();
};

module.exports = insertDataVisorsHat;
