let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Hey the promise has been resolved to DATA");
    } else {
        reject("Sorry the data couldnt be fetched");
    }
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));