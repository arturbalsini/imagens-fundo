var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FundoSchema = new Schema({
  text: String,
  value: String
});

var Fundo = mongoose.model("Fundo", FundoSchema);
module.exports = Fundo;
