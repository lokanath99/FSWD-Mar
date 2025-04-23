const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testdb");

// var userSchema = mongoose.Schema({
//     name: { type: String, required: true },
//     age: { type: Number, min: 0, max: 108, default: 18 },
//     adhaar: { type: Number, required: true, unique: true },
//     gender: {
//         type: String,
//         required: true,
//         enum: ["M", "F", "O"],
//         // validate: {
//         //     validator: function (value) {
//         //         if (value == "M" || value == "F" || value == "O") {
//         //             return true;
//         //         } else return false;
//         //     },
//         //     message: "user gender can be M, F or O",
//         // },
//     },
// });

// var userModel = mongoose.model("user", userSchema);
var userModel = require("./models/userSchema");

userModel.create({
    name: "talkalot",
    adhaar: "568986035675",
    gender: "M",
});

// userModel.create({ name: "talkalot", age: 109, adhaar: "568986235689" });
// const user1 = new User({name:"loka", age:9})
// user1.save();

// async function find(obj) {
//     var data = await userModel.find(obj);
//     console.log(data);
// }

// find({ age: 9 });

// async function updateAge(obj, age1) {
//     var data = await userModel.findOne(obj);
//     data.age = age1;
//     return await data.save();
// }

// console.log(updateAge({ name: "talkalot" }, 78));
// // C R U D

// async function deleteData(query) {
//     var fdbk = await userModel.deleteOne(query);
//     console.log(fdbk);
// }
// deleteData({ name: "talkalot" });

// userModel
//     .findOne({ name: "talkalot" })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });
