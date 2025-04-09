// divisible by zero
// index out of bound error

try {
    var a = 7 + 8;
    console.log("in the Try block", a);
    if (a == 15) {
        // throw new Error("a is equal to 15 error");
    }
} catch (err) {
    console.log("handling the err", err.message);
} finally {
    console.log("Finally block executed");
}
