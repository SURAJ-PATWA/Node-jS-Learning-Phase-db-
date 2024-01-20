const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/nodejslearning") // nodejslearning db ka name haa
  .then(() => {                                         //callback fun leta haa
    console.log("connection Successful");
  })
  .catch((e) => {                                         // cllback fun
    console.log("connection failed");
  });

const schema = new mongoose.Schema({                        // ye schema haa kon kon saw colm  hoga
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  confpassword: { type: String, required: true }
});
const user = mongoose.model("user", schema);            //user collection ka name haa ye amin hota haa    aur schema 
module.exports = user;


