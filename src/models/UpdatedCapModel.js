const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const ClientSchema = new Schema({
  path: String,
  id: String,
  name: String,
  style: [String],
  decoration: [String],
});

const UpdatedCapModel = mongoose.model("UpdatedCapModel", ClientSchema);

module.exports = UpdatedCapModel;
