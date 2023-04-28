const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const ClientSchema = new Schema({
  name: String,
  email: String,
  text: String,
});

const ClientModel = mongoose.model("ClientModel", ClientSchema);

module.exports = ClientModel;
