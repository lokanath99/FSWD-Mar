import { useContext } from "react";
import { MyContext } from "./App.jsx";

function Copyright() {
    const obj = useContext(MyContext);
    return (
        <>
            <h1>Welcome to Copyright {obj.name}</h1>
        </>
    );
}

export default Copyright;
