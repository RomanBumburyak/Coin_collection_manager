const express = require("express");
const Coin = require("../models/index");
const router = express.Router();

router.get("/", function(req,res) {
  Coin.find({})
  .then(function(coins){
    console.log("coin collection");
    console.log(coins);
    res.render("index", {coinCollect: coins});
  })
  // Coin.create({
  //   name: req.body.name,
  //   yearIssued: {
  //     type: req.body.type,
  //     min: req.body.min,
  //   },
  //   composition:[{
  //     iron: req.body.iron,
  //     copper: req.body.copper,
  //     zinc: req.body.zinc
  //   }],
  // Coin.find({
  //   name: "Coinage"
  //   cookTime: {$gt: 15, $lt: 60}
  // }).then(function(data){
  //   console.log(data);
  // }).catch(function(err){


});

router.post("/addCoin", function(req,res){
  console.log(req.body);

  let newCoin = {
    name: req.body.name,
      type: Number(req.body.type),
      min: Number(req.body.min),
    composition:[{
      iron: Number(req.body.iron),
      copper: Number(req.body.copper),
      zinc: Number(req.body.zinc)
    }],
  };






  // var newCoin = new Coin;
  Coin.create(newCoin)
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  })
  res.redirect("/");
})






module.exports = router;
