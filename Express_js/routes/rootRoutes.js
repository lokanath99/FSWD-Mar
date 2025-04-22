const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers);
    // res.sendFile("D:\\FSWD\\Basics\\HTMLs\\htmls\\basics.html");
    // res.download("D:\\FSWD\\Basics\\HTMLs\\htmls\\rickroll.webm");
    res.send(req.query);
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

module.exports = router;
