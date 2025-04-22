const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hi From the users router Get handler");
});

router.post("/", (req, res) => {
    res.send("Hi From the users router post handler");
});

module.exports = router;
