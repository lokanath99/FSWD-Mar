const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", async (req, res) => {
    try {
        var query = req.query;
        console.log(query);
        await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
        var userModel = require("../models/userSchema");
        var data = await userModel.find(query);
        res.json(data);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(
            "internal server error - DB connections denied..!"
        );
    } finally {
        mongoose.disconnect();
    }
});

router.post("/", async (req, res) => {
    try {
        var data = req.body;
        // console.log(query);
        await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
        var userModel = require("../models/userSchema");
        var fdbk = await userModel.create(data);
        res.json(fdbk);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    } finally {
        mongoose.disconnect();
    }
});

router.put("/", async (req, res) => {
    try {
        var data = req.body;
        var query = data.query;
        var update = data.update;
        console.log(typeof update[0]);
        console.log(query);
        await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
        var userModel = require("../models/userSchema");
        var found = await userModel.findOne(query);
        found[update[0]] = update[1];
        var fdbk = await found.save();
        res.json(fdbk);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    } finally {
        mongoose.disconnect();
    }
});

router.delete("/", async (req, res) => {
    try {
        var query = req.body;
        await mongoose.connect("mongodb://127.0.0.1:27017/testdb");
        var userModel = require("../models/userSchema");
        var fdbk = await userModel.deleteOne(query);
        res.json(fdbk);
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    } finally {
        mongoose.disconnect();
    }
});
module.exports = router;
