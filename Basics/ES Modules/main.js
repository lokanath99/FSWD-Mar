import { sayHello, PI } from "./User.js";
import User from "./User.js";

document.addEventListener("DOMContentLoaded", () => {
    var talk = new User("talk", "Talk@123");

    document.getElementById("root").innerHTML =
        talk.getUser() + sayHello() + " " + PI;
});
