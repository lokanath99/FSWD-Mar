arr = [
    { name: "talkalot", age: 89 },
    { name: "talk", age: 8 },
    { name: "lot", age: 9 },
];

console.log(arr.map(HandelMap));
console.log(arr);

function HandelMap(ele) {
    return (ele.name+ ' Indian!')
}
