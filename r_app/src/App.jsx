import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import Home from "./Home.jsx";

export var MyContext = createContext();
function App() {
    const [name, setName] = useState("");
    return (
        <>
            <MyContext.Provider value={{ name, setName }}>
                <div className="text-center mt-5">
                    <h1>Hello {name}</h1>
                    <Home />
                </div>
            </MyContext.Provider>
        </>
    );
}

export default App;

/* function Component(){
    const [counter, setCounter] = useState()


}*/

// var counter = 0;
//
// const [counter, setCounter] = useState(0);
// function updateCounter() {
//     setCounter(counter + 1);
// }
// const [data, setData] = useState("");
// function updateData(event) {
//     setData(event.target.value);
//     console.log(event.target.value);
// }

// useEffect(() => {
//     var resPromise = axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//     );
//     resPromise
//         .then((response) => {
//             console.log(response.data[0]);
//             setData(response.data[0].body);
//         })
//         .catch((err) => {
//             console.log(err.message);
//         });
// }, [counter]);
