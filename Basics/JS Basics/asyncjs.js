function greet(name, callback) {
    console.log("Hello ", name);
    callback(name);
}
function goodbye(name) {
    console.log("good bye!!!", name);
}

function goodbyeSpecial(name) {
    console.log("good bye your honour!!!", name);
}
// greet("talkalot", (name) => {
//     console.log("good bye from anonymous function!!!", name);
// });

let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Hey the promise has been resolved to DATA");
    } else {
        reject("Sorry the data couldnt be fetched");
    }
});

// promise.then(data => console.log(data)).catch(err => console.log(err))
// console.log(promise)

const fs = require("fs").promises;

async function readfileAsync() {
    let data = await fs.readFile("D:\\FSWD\\JS Basics\\example.txt", "utf-8");
    console.log(data);
}

readfileAsync()
// let data = fs.readFile('D:\\FSWD\\JS Basics\\example.txt', 'utf-8');
// console.log(data);
