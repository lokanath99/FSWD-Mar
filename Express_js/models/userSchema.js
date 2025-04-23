const mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 0, max: 108, default: 18 },
    adhaar: { type: Number, required: true, unique: true },
    gender: {
        type: String,
        required: true,
        enum: ["M", "F", "O"],
        // validate: {
        //     validator: function (value) {
        //         if (value == "M" || value == "F" || value == "O") {
        //             return true;
        //         } else return false;
        //     },
        //     message: "user gender can be M, F or O",
        // },
    },
});

module.exports = mongoose.model("user", userSchema);
