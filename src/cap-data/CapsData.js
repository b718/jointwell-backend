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

//BC Section

const BC001 = new UpdatedCapModel({
  path: `Caps/BC001.png`,
  id: "BC001",
  name: "Baseball Cap 1",
  style: ["caps"],
  decoration: [""],
});

// const BC01 = new UpdatedCapModel({
//   path: `Caps/BC01.png`,
//   id: "BC01",
//   name: "Baseball Cap 1",
//   style: ["caps"],
// //   decoration: [""],
// });

const BC002 = new UpdatedCapModel({
  path: `Caps/BC002.jpg`,
  id: "BC002",
  name: "Baseball Cap 2",
  style: ["caps"],
  decoration: [""],
});

const BC003 = new UpdatedCapModel({
  path: `Caps/BC003.jpg`,
  id: "BC003",
  name: "Baseball Cap 3",
  style: ["caps"],
  decoration: [""],
});

const BC004 = new UpdatedCapModel({
  path: `Caps/BC004.png`,
  id: "BC004",
  name: "Baseball Cap 4",
  style: ["caps"],
  decoration: [""],
});

const BC005 = new UpdatedCapModel({
  path: `Caps/BC005.png`,
  id: "BC005",
  name: "Baseball Cap 5",
  style: ["caps"],
  decoration: [""],
});

const BC006 = new UpdatedCapModel({
  path: `Caps/BC006.png`,
  id: "BC006",
  name: "Baseball Cap 6",
  style: ["caps"],
  decoration: [""],
});

const BC007 = new UpdatedCapModel({
  path: `Caps/BC007.jpg`,
  id: "BC007",
  name: "Baseball Cap 7",
  style: ["caps"],
  decoration: [""],
});

// const BC008 = new UpdatedCapModel({
//   path: `Caps/BC008.png`,
//   id: "BC008",
//   name: "Baseball Cap 8",
//   style: ["caps"],
// //   decoration: [""],
// });

const BC009 = new UpdatedCapModel({
  path: `Caps/BC009.jpg`,
  id: "BC009",
  name: "Baseball Cap 9",
  style: ["caps"],
  decoration: [""],
});

const BC010 = new UpdatedCapModel({
  path: `Caps/BC010.jpg`,
  id: "BC010",
  name: "Baseball Cap 10",
  style: ["caps"],
  decoration: [""],
});

// const BC011 = new UpdatedCapModel({
//   path: `Caps/BC011.png`,
//   id: "BC011",
//   name: "Baseball Cap 11",
//   style: ["caps"],
// //   decoration: [""],
// });

// const BC012 = new UpdatedCapModel({
//   path: `Caps/BC012.png`,
//   id: "BC012",
//   name: "Baseball Cap 12",
//   style: ["caps"],
// //   decoration: [""],
// });

const BC013 = new UpdatedCapModel({
  path: `Caps/BC013.jpg`,
  id: "BC013",
  name: "Baseball Cap 13",
  style: ["caps"],
  decoration: [""],
});

const BC014 = new UpdatedCapModel({
  path: `Caps/BC014.jpg`,
  id: "BC014",
  name: "Baseball Cap 14",
  style: ["caps"],
  decoration: [""],
});

const BC015 = new UpdatedCapModel({
  path: `Caps/BC015.jpg`,
  id: "BC015",
  name: "Baseball Cap 15",
  style: ["caps"],
  decoration: [""],
});

//EB Section

// const EB001 = new UpdatedCapModel({
//   path: `Caps/EB001.jpg`,
//   id: "EB001",
//   name: "Baseball Cap 11",
//   style: ["caps"],
// //   decoration: [""],
// });

// const EB002 = new UpdatedCapModel({
//   path: `Caps/EB002.jpg`,
//   id: "EB002",
//   name: "Baseball Cap 11",
//   style: ["caps"],
// //   decoration: [""],
// });

//PA Section

// const PA001 = new UpdatedCapModel({
//   path: `Caps/PA001.jpg`,
//   id: "PA001",
//   name: "Baseball Cap 11",
//   style: ["caps"],
// //   decoration: [""],
// });

// const PA002 = new UpdatedCapModel({
//   path: `Caps/PA002.jpg`,
//   id: "PA002",
//   name: "Baseball Cap 11",
//   style: ["caps"],
// //   decoration: [""],
// });

// const PA003 = new UpdatedCapModel({
//   path: `Caps/PA003.jpg`,
//   id: "PA003",
//   name: "Baseball Cap 11",
//   style: ["caps"],
// //   decoration: [""],
// });

// const PA004 = new UpdatedCapModel({
//   path: `Caps/PA004.jpg`,
//   id: "PA004",
//   name: "Baseball Cap 11",
//   style: ["caps"],
// //   decoration: [""],
// });

//PC Section

// const PC002 = new UpdatedCapModel({
//   path: `Caps/PC002.png`,
//   id: "PC002",
//   name: "Baseball Cap 11",
//   style: ["caps"],
// //   decoration: [""],
// });

// const PC003 = new UpdatedCapModel({
//   path: `Caps/PC003.png`,
//   id: "PC003",
//   name: "Baseball Cap 11",
//   style: ["caps"],
// //   decoration: [""],
// });

// const PC004 = new UpdatedCapModel({
//   path: `Caps/PC004.png`,
//   id: "PC004",
//   name: "Baseball Cap 11",
//   style: ["caps"],
// //   decoration: [""],
// });

const insertDataCaps = async () => {
  //BC Section
  await BC001.save();
  await BC002.save();
  await BC003.save();
  await BC004.save();
  await BC005.save();
  await BC006.save();
  await BC007.save();
  //await BC008.save();
  await BC009.save();
  await BC010.save();
  //await BC011.save();
  //await BC012.save();
  await BC013.save();
  await BC014.save();
  await BC015.save();
  //await BC01.save();

  //EB Section
  // await EB001.save();
  // await EB002.save();

  //PA Section
  // await PA001.save();
  // await PA002.save();
  // await PA003.save();
  // await PA004.save();

  //PC Section
  // await PC003.save();
  // await PC002.save();
  // await PC004.save();
};

module.exports = insertDataCaps;
