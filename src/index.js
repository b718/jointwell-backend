const express = require("express");
const app = express();
const env = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const ClientModel = require("./models/Clients");
const CapModel = require("./models/HatCard");
const UpdatedCapModel = require("./models/UpdatedCapModel");
const insertDataBucketHat = require("./cap-data/BucketHatData");
const insertDataCaps = require("./cap-data/CapsData");
const insertDataEmbroideryHat = require("./cap-data/EmbroideryData");
const insertDataKnittedHat = require("./cap-data/KnittedHatData");
const insertDataOtherHat = require("./cap-data/OtherHatData");
const insertDataPatchesHat = require("./cap-data/PatchesData");
const insertDataPrintingHat = require("./cap-data/PrintingData");
const insertDataSportsHat = require("./cap-data/SportsHatData");
const insertDataVisorsHat = require("./cap-data/VisorsData");
const insertDataWashingHat = require("./cap-data/WashingData");
const insertDataWovenLabel = require("./cap-data/WovenLabelData");
const corsOptions = require("./config/corsOptions");

const port = 3001;

mongoose.connect(process.env.MONGO_URL).then(() => {});
console.log("Connected to MongoDB!");
//middle ware function, telling express to use it!
//allows support for json post request
app.use(express.json());

app.use(cors(corsOptions));
//54 files
const importingData = async () => {
  await insertDataEmbroideryHat();
  await insertDataPatchesHat();
  await insertDataOtherHat();
  await insertDataCaps();
  await insertDataPrintingHat();
  await insertDataSportsHat();
  await insertDataVisorsHat();
  await insertDataWashingHat();
  await insertDataWovenLabel();
  await insertDataBucketHat();
  await insertDataKnittedHat();
};

importingData();

app.get("/", (req, res) => {
  const newCM = new ClientModel({
    name: "John Loon",
    email: "test@example.com",
    text: "Love the hats keep it up!",
  });
  res.send("hello world");
  console.log(newCM);
});

//fetch is get, put is post

//this is to put data into our database
app.post("/client", async (req, res) => {
  console.log(req.body);
  const newCM = new ClientModel({
    name: req.body.name,
    email: req.body.email,
    text: req.body.text,
  });

  const newCap = new CapModel({
    path: "../Images/hat-pic.png",
    id: "0-001",
    name: "Hat Name",
    style: ["test1"],
  });
  const savedCm = await newCM.save();
  const savedCap = await newCap.save();
  res.json(savedCm);
});

//this is to fetch data from our database to render!
app.get("/clients", async (req, res) => {
  //2 main questions are
  //1. how to fetch the products from mongo?

  const cm = await ClientModel.find();
  console.log(cm);
  //2. how do we send back the array to the UI?
  res.json(cm);
});

app.get("/hats", async (req, res) => {
  //2 main questions are
  //1. how to fetch the products from mongo?

  const cm = await UpdatedCapModel.find();
  //console.log(cm);
  //2. how do we send back the array to the UI?
  res.json(cm);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
