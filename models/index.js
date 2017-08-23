const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const Schema = mongoose.Schema;

mongoose.Promise = require('bluebird');
mongoose.connect("mongodb://localhost:27017/coinDirectory");

//SCHEMA:////////////

const coinSchema = new Schema ({
  name: { type: String, required: true, unique: true},
    type: Number,
    min: Number,
  composition:[{
    iron: {type: Number, required:true },
    copper: {type: Number, require:true},
    zinc: {type: Number, require:true}
  }],
});

const Coin = mongoose.model("Coin", coinSchema); //coin is the name of the collection;

module.exports = Coin;
