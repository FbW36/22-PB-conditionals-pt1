let num1 = 60;
let num2 = 50;
let num3 = 40;

if ( num1 >= 50 && num2 >= 50 && num1 <= 99 && num2 <= 99) {
    console.log(true);
} else {
    console.log(false);
}

if ( num1 >= 50 || num2 >= 50 || num3 >= 50 || num3 <= 99 || num1 <= 99 || num2 <= 99) {
    console.log(true);
} else {
    console.log(false);
}

let a = 10;
let b = 34;
let c = 100;

if ( a > b && a > c) {
    console.log(`a with ${a} is the biggest number!`);
} else if ( b > a && b > c) {
    console.log(`b with ${b} is the biggest number!`);
} else {
    console.log(`c with ${c} is the biggest number!`);
}
// Still works when changing the numbers


let string = "Apple";
let newString = "Py";

if (newString !== string) {
    newString += string;
    console.log(newString);
} else {
    console.log(string);
}

let sum = num1 + num2;

if (sum >= 50 && sum <= 80) {
    console.log(65);
} else {
    console.log(80);
}

let int1 = 3;
let int2 = 5;
let sum1 = int1 + int2;
let sum2 = int1 - int2;

if(sum1 === 8 || sum2 === 8) {
    console.log(true);
}

let int3 = 15;
let int4 = 21;

if (int3 === 15 || int4 === 15) {
    console.log(true);
}


if (int3 % 7 === 0 || int3 % 11 === 0 || int4 % 7 === 0 || int4 % 11 === 0 ) {
    console.log(true);
}

let num4 = 45;
let num5 = 45;

if (num4 === num5) {
   let sum3 = num4 + num5;
   console.log(sum3 * 3);
}

let num6 = 50;

if (num6 - 19 > 19) {
    let sum4 = num6 - 19;
    console.log(sum4 * 2);
}