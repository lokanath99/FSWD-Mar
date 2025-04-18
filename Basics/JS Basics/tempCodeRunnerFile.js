const fs = require("fs").promises;

async function readfileAsync() {
    let data = await fs.readFile("D:\\FSWD\\Basics\\JS Basics\\example.txt", "utf-8");
    console.log(data);
}

readfileAsync();