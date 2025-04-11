import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    // var counter = 0;
    //
    const [counter, setCounter] = useState(0);
    function updateCounter() {
        setCounter(counter + 1);
    }
    const [data, setData] = useState("");
    // function updateData(event) {
    //     setData(event.target.value);
    //     console.log(event.target.value);
    // }

    useEffect(() => {
        var resPromise = axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        resPromise
            .then((response) => {
                console.log(response.data[0]);
                setData(response.data[0].body);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [counter]);
    return (
        <>
            <div className="text-center mt-5">
                <h1>Hello {data}</h1>
                <button className="btn btn-primary" onClick={updateCounter}>
                    Increment
                </button>
                <h1>{counter}</h1>
            </div>
        </>
    );
}

export default App;

/* function Component(){
    const [counter, setCounter] = useState()


}*/
