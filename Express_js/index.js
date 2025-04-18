const express = require("express");
const app = express();

const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log(`server listing on port: ${PORT}`);
});

app.get("/", (req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    // res.sendFile("D:\\FSWD\\Basics\\HTMLs\\htmls\\basics.html");
    // res.download("D:\\FSWD\\Basics\\HTMLs\\htmls\\rickroll.webm");
    res.send(req.query.name);
});

app.post("/", (req, res) => {
    res.json(req.body);
});
