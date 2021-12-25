const mongoose = require("mongoose");

const NameSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
});

const Name = mongoose.model('Name', NameSchema);
module.exports = Name;

