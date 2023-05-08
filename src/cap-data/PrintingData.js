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

const PC001 = new UpdatedCapModel({
  path: `Printing/PC001.png`,
  id: "PC001",
  name: "Printing Hat 1",
  style: ["caps"],
  decoration: ["printing"],
});

const PC002 = new UpdatedCapModel({
  path: `Printing/PC002.png`,
  id: "PC002",
  name: "Printing Hat 2",
  style: ["caps"],
  decoration: ["printing"],
});

const PC003 = new UpdatedCapModel({
  path: `Printing/PC003.png`,
  id: "PC003",
  name: "Printing Hat 3",
  style: ["caps"],
  decoration: ["printing"],
});

const PC004 = new UpdatedCapModel({
  path: `Printing/PC004.png`,
  id: "PC004",
  name: "Printing Hat 4",
  style: ["caps"],
  decoration: ["printing"],
});

const VC005 = new UpdatedCapModel({
  path: `Printing/VC005.png`,
  id: "VC005",
  name: "Printing Hat 4",
  style: ["visors"],
  decoration: ["printing", "embroidery"],
});

const insertDataPrintingHat = async () => {
  await PC001.save();
  await PC002.save();
  await PC003.save();
  await PC004.save();
  await VC005.save();
};

module.exports = insertDataPrintingHat;
