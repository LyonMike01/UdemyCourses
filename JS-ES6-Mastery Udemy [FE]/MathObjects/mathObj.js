

let mathObj = Math;

console.log(mathObj);

console.log("Value of PI is " + mathObj.PI);

console.log("Rounding " + mathObj.round(34.456555));

console.log("Exponetial power 5 to power 3 " + mathObj.pow(5,3));

console.log("square root of 144 is " + mathObj.sqrt(144));
console.log("Ceil " + mathObj.ceil(22.8));
console.log("Floor " + mathObj.floor(22.8));

console.log(mathObj.abs(-5)); //converts -ve numb to +ve numb  

console.log("sin(pi) is " + mathObj.sin(mathObj.PI/2));
console.log("cos(pi) is " + mathObj.cos(mathObj.PI/2));
console.log("tan(pi) is " + mathObj.tan(mathObj.PI/2));

let randomNo = mathObj.random(); //gives a random number btw 0 and 1
console.log(randomNo);

function randomIntromInterval(min, max) {
    return mathObj.floor(mathObj.random() * (max - min + 1) + min)
}

const rndInt = randomIntromInterval(1, 200);
console.log(rndInt);