import { useContext } from "react";
import { MyContext } from "./App.jsx";
import Copyright from "./Copyright.jsx";

// import { useEffect, useState } from "react";
// import axios from "axios";
function Footer() {
    const obj = useContext(MyContext);
    // console.log(name);
    return (
        <>
            <h1>Welcome to Footer {obj.name}</h1>
            <Copyright />
            <input
                type="text"
                onChange={(event) => {
                    obj.setName(event.target.value);
                    console.log(event);
                }}
            />
        </>
    );
}

export default Footer;
