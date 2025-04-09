import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";
import HandelArr from "./components/HandelArr.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* <Navbar /> */}
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">about</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);

// function Football(props) {
//     return (
//         <>
//             <h1>Hi From Foot ball component</h1>
//             {/* {props.ballWithMaradona && <p>Maradona is having the ball</p>} */}
//             {/* {condition ? true : false} */}
//             {props.ballWithMaradona ? (
//                 <p>Maradona is having the ball</p>
//             ) : (
//                 <p>other playes is having the ball</p>
//             )}
//         </>
//     );
// }
{
    /* <ClassDemo person={person} /> */
}
{
    /* <Football ballWithMaradona={false} /> */
}

// var a = 56;
// var element = <h1>This i a reach app</h1>;
// function ClassDemo(props) {
//     function kick(player, event) {
//         console.log(event);
//         alert(`${player} hits the Goal....!`);
//     }

//     return (
//         <>
//             <h1 className="display-5">
//                 Hello this is from Class Demo{" "}
//                 {props.person.name + " " + props.person.age}
//             </h1>
//             <button
//                 className="btn btn-primary"
//                 onClick={(event) => console.log(event)}
//             >
//                 Kick...
//             </button>
//         </>
//     );
// }

// var person = {
//     name: "talkalot",
//     age: 96,
// };
