const express = require("express");
const app = express();
const cors = require("cors");
// require("dotenv").config();

const corsOptions = {
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

console.log(process.env.PORT);
console.log(process.env.API_KEY);

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const rootRouter = require("./routes/rootRoutes");
app.use("/", rootRouter);

const userRouter = require("./routes/userRoutes");
app.use("/user", userRouter);

const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log(`server listing on port: ${PORT}`);
});
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
