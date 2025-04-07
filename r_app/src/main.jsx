import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navbar />
    </StrictMode>
);
