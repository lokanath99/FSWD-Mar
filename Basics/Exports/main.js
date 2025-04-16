const User = require("./User"); //import the module
const math = require("./math");

let sys_user = new User("Talkalot", "talkalot@gmail.com");
sys_user.displayInfo();
console.log(math.PI);
