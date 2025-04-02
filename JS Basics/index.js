// var num = 5;
// const num = 3.14;
// let num = 10;
// var num1 = 90;
// data types
// number
// let num = 3.14;
console.log(typeof num);
// string
let str1 = `lok"anath's`;
console.log(str1);
// boolean
// (true -> 1)
// (false -> 0)
var bool = false;
console.log(typeof bool);
//
var notknown; // declaration
notknown = "hi"; //defining
console.log(notknown);

var null1 = null;
console.log(typeof null1);

// object data types
// arrays -> sequencial data types
var arr = [155, 55, 456, 48, 568, 98, 5, 65, 5, 65];
//          0,   1   2    3   4    5   6  7  8   9
arr[4] = 10010;
console.log(arr.length);

// JSON

// Operators
// 5 + 6
// + -> OPERATOR
// NUMBERS -> OPERANDS

// mathematical operators
// + - * / ** % ++ --
var num = 10;
var num2 = 4;
console.log(Math.floor(num / num2));
console.log(--num2);
console.log(num2);

var a = 5;
// console.log(a = a + 2)
console.log((a **= 2));

// conditional operator
// == equal to
num = 8;
num2 = 8;
num3 = 10;
// console.log(! num !== num2)

// logical operators
//  and - > && 2. OR -> || 3. Not -> !
console.log(num > num2 || num == num3);
//                p                q

// conditional statement
num = 8;
num2 = 8;
num3 = 10;
if (num > num2) {
    console.log("inside if");
} else if (num < num3) {
    console.log("inside elseif");
} else {
    console.log("inside else");
}

var day = 2.5;
switch (day) {
    case "a":
        // n number of statement
        console.log("Monday");
        break;
    case 2.5:
        // n number of statement
        console.log("Tuesday");
        break;
    case 3:
        // n number of statement
        console.log("wednesday");
        break;
    case 4:
        // n number of statement
        console.log("thursday");
        break;
    default:
        console.log("Hello from default");
        break;
}

// looping
// initialise a counter
var c = 5;
while (c < 5) {
    //counter check / condition check
    console.log("Good morning!");
    // incrementing a counter
    c++;
}
// control
console.log("done with loop");

// do while
var c = 5;
do {
    //counter check / condition check
    console.log("Good morning!");
    // incrementing a counter
    c++;
} while (c < 5);
console.log("done with loop");

// for loops
for (let c = 0; c < 5; c++) {
    console.log("Good morning!");
}

//         0, 1, 2, 3, 4, 5, 6
// console.log(arr.length);
for (let c = 0; c < arr.length; c++) {
    console.log(arr[c]);
}

for (var something of arr) {
    console.log(something);
}

var arr = [1, 2, 3, 5, 6, 5, 8];
arr.forEach((num) => {
    console.log(num);
});

// functions
function say_my_name(a, b) {
    //n lines of code
    console.log(a + b);
    console.log("Talkalot...!");
} //function defination

say_my_name(5, 6); //calling a function

say_my_name(8, 2);

function add(...para) {
    var result = 0;
    for (var ele of para) {
        result += ele;
    }
    return result;
}

console.log(add(5, 6, 5, 6, 5, 4, 3, 4, 6, 5));

// anonymous functions
a = (...para) => {
    var result = 0;
    for (var ele of para) {
        result += ele;
    }
    return result;
};

console.log(a(56, 6, 8, 6, 9, 4, 5, 9, 5, 5));

arr = [6,5,9,8,5,6,4,5,8,9];
arr.forEach((ele)=>{
    console.log(ele);
})
