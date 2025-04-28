import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/user").then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    }, []);

    const handleView = (name) => {
        alert(`Viewing profile of ${name}`);
    };
    return (
        <div className="container mt-4">
            <div className="row">
                {data.map((user, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 shadow-sm border-primary">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title text-primary">
                                    👤 {user.name}
                                </h5>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item">
                                        <strong>Age:</strong> {user.age}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Adhaar:</strong> {user.adhaar}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Gender:</strong> {user.gender}
                                    </li>
                                </ul>
                                <button
                                    className="btn btn-outline-primary mt-auto"
                                    onClick={() => handleView(user.name)}
                                >
                                    View Profile
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

// const [name, setName] = useState("");
//     return (
//         <>
//             <MyContext.Provider value={{ name, setName }}>
//                 <div className="text-center mt-5">
//                     <h1>Hello {name}</h1>
//                     <Home />
//                 </div>
//             </MyContext.Provider>
//         </>
//     );

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
