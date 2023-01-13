const express = require("express");

// setting up express router
const router = express.Router();
const Doctor = require("../model/model");
module.exports = router;

//Get all doctors
router.get("/doctors", (req, res) => {
  Doctor.find({}, (err, docs) => {
    if (err) console.log(err);
    else res.json(docs);
  });
});
