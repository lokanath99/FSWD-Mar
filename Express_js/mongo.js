const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testdb");

var userSchema = mongoose.Schema({
    name: String,
    age: Number
})

var User = mongoose.model("user", userSchema);

const user1 = new User({name:"loka", age:9})
user1.save();