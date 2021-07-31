console.log("hello");

// alert("Hello, this is Endzo!");

let b = "Endzo";
console.log(b);

let someNumber = 45;
console.log(someNumber)


// let age = prompt('Who do you love?');

// document.getElementById('someText').innerHTML = age;

function fun() {
    console.log("This is a function")
}

fun();

function greeting() {
    let name = prompt('What is your name?')
    let result = `Hello ${name}`
    document.getElementById('someText').innerHTML = result
}

// greeting()

function sumNumbers(num1, num2) {
    let result = num1 + num2
    console.log(result)
}

// sumNumbers(7, 4)

function greeting(yourName) {
    let result = `Hello ${yourName}`
    console.log(result)
}

// const name = prompt('What is your name?');
// greeting(name)

let num = 0;

// while(num < 100) {
//     num++;
//     console.log(num)
// }

for(let num = 1; num < 101; num++) {
    console.log(num)
}