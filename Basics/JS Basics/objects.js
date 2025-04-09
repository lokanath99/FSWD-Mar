const person = [
    {
        gender: "male",
        age: 60,
        eyeColor: { left: "brown", right: "blue" },
        name: "john",
        displayPerson: () => {
            console.log("Gender: ", person.gender, "\n", "name: ", person.name);
        },
    },
    {
        gender: "male",
        age: 60,
        eyeColor: { left: "brown", right: "blue" },
        name: "doe",
        displayPerson: () => {
            console.log("Gender: ", person.gender, "\n", "name: ", person.name);
        },
    },
    {
        gender: "male",
        age: 60,
        eyeColor: { left: "brown", right: "blue" },
        name: "Talkalot",
        displayPerson: () => {
            console.log("Gender: ", person.gender, "\n", "name: ", person.name);
        },
    },
];

person.forEach((ele)=>{
    console.log(ele.name)
})

// var fun = ()=> {console.log("This is a function")};
// console.log(typeof fun);

// function person(gen, age, name, eyeColor, height) {
//     this.gender = gen;
//     this.age = age;
//     this.name = name;
//     this.eyeColor = eyeColor;
//     this.height = height;
// }

// person.fname = "test"
// console.log(new person("Female", 56,"doe","blue",5.50));
