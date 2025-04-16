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
greet("talkalot", (name) => {
    console.log("Bye Bye Bye!!! ", name);
});