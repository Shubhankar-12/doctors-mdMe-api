const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// doctors schema
const doctorSchema = new Schema(
  {
    web_scraper_order: String,
    web_scraper_start_url: String,
    links: String,
    links_href: String,
    doctor_name: String,
    doctor_qualification: String,
    dotor_specialisation: String,
    doctor_experience: String,
    doctor_fee: String,
    clinic_address: String,
    doctor_time: String,
  },
  {
    collection: "doctors",
  }
);

module.exports = mongoose.model("doctorsModel", doctorSchema);
