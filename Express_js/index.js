const express = require("express");
const app = express();

const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log(`server listing on port: ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const rootRouter = require("./routes/rootRoutes");
app.use("/", rootRouter);

const userRouter = require("./routes/userRoutes");
app.use("/user", userRouter);

// app.get("/", (req, res) => {
//     console.log(req.method);
//     // console.log(req.url);
//     // console.log(req.headers);
//     // res.sendFile("D:\\FSWD\\Basics\\HTMLs\\htmls\\basics.html");
//     // res.download("D:\\FSWD\\Basics\\HTMLs\\htmls\\rickroll.webm");
//     res.send(req.query);
// });

// app.post("/", (req, res) => {
//     console.log(req.body);
//     res.json(req.body);
// });

// function auth(req, res, next) {
//     console.log("logger middle-were in action");
//     var auth = true;
//     if (auth) {
//         next();
//     }
//     res.status(501);
// }

// app.use(logger);
