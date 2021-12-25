// const mongoose = require("mongoose");

// const footerSchema = new mongoose.Schema({
//     email: {
//         type: String,
//     },
// });

// const footer = mongoose.model('footer', footerSchema);
// module.exports = footer;
const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema({
    email: {
        type: String,
    },
});

const footer = mongoose.model('footer', footerSchema);
module.exports = footer;

