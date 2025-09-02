const mongoose = require("mongoose");
 
const userData = new mongoose.Schema({
    userName:{
        type: String
    },
    userPassword:{
        type: String
    }
});
 
 
module.exports = mongoose.model("userData", userData);
 