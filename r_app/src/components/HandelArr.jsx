function HandelArr() {
    var arr = [
        { name: "talkalot", age: 89 },
        { name: "talka", age: 8 },
        { name: "lot", age: 9 },
    ];
    return (
        <>
            <h1>Hello from Handel array</h1>
            {arr.map((ele) => {
                return <p> This is a man element {ele.name + " Indian!"} </p>;
            })}
        </>
    );
}

export default HandelArr;
