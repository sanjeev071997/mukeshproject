const mongoose = require("mongoose");

const contactUsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
      type: String,
    },
    adderss: {
      type: String,
    },
    msg: {
      type: String,
    },
   
});

const contactUs = mongoose.model('contactUS', contactUsSchema);

module.exports = contactUs;
