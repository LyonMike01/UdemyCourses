

//quick work on spread operators

const arr1 = [11, 22, 33];
const arr2 = [55, 01, 44];

const newArray = [...arr1, ...arr2];
console.log(newArray); // spread operator joins array or add new items to existing array
 
const newArr2 = [...arr2, 88, 64];
console.log(newArr2);


// Normal function

function add1(numb1, numb2){
	return numb1 + numb2;
}

let result = add1(3, 2)

console.log(result);


const add2 = function (numb1, numb2) {
	return numb1 + numb2;
}

 result = add2(13, 5)

console.log(result);


//Arrow function

const add3 = (numb1, numb2)  => {
	return numb1 + numb2;
}

 result = add3(12, 3)

console.log(result);



const add4 = (numb1, numb2)  => numb1 + numb2;

 result = add4(7, 3)

console.log(result);



const square = (numb)  => {
	return numb * numb;
}

 result = square(12)

console.log(result);



const square2 = (numb)  => numb * numb;

 result = square2(3)

console.log(result);


const square3 = numb  => numb * numb; // This only works if there is only one param

 result = square3(4)

console.log(result);



 const sayHello = () => console.log("Hello World!");

 sayHello();

 setInterval(() => {console.log("After 2 seconds")}, 2000);
 setInterval(function() {console.log("After 2 seconds")}, 2000);
  setInterval(function test() {console.log("After 2 seconds")}, 2000);
