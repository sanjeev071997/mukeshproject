const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://office:ML5FBbScNlcjTaca@cluster0.3wgaw.mongodb.net/avika?retryWrites=true&w=majority",{
   useNewUrlParser:true,
   useUnifiedTopology: true
}).then( ()=>{
    console.log("connection successfully");
}).catch((error)=>{
    console.log(error);
});

