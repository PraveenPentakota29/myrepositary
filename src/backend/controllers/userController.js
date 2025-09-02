
const userdata = require("../modals/usermodal");
 
const AddUser = async(req, res) => {
    const userdt = req.body;
    console.log(userdt);
   
    res.send("user added successfully..");
}
 
exports.AddUser = AddUser;