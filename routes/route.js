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

// Get specific doctors by location:- query name(loc)
router.get("/doctors/location", (req, res) => {
  const location = req.query.loc;
  Doctor.find(
    { clinic_address: { $regex: location, $options: "i" } },
    (err, foundDocs) => {
      if (err) console.log(err);
      res.json(foundDocs);
    }
  );
});
