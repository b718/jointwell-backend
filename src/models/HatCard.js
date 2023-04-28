const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const ClientSchema = new Schema({
  path: String,
  id: String,
  name: String,
  style: [String],
});

const CapModel = mongoose.model("CapModel", ClientSchema);

module.exports = CapModel;
