// 1.
let num1 = 28;
let num2 = 59;
let res1 = num1 >= 50 || num1 <= 99;
let res2 = num2 >= 50 || num2 <= 99;

if (res1 || res2) {
  console.log(true);
} else {
  console.log(false);
}

// 2.
let value1 = 40;
let value2 = 78;
let value3 = 101;

let resValue1 = value1 >= 50 || value1 <= 99;
let resValue2 = value2 >= 50 || value2 <= 99;
let resValue3 = value3 >= 50 || value3 <= 99;

if (resValue1 || resValue3 || resValue3) {
  console.log(true);
}

// 3.
let a = 18;
let b = 40;
let c = 88;

if (
  a === Math.max(a, b, c) ||
  b === Math.max(a, b, c) ||
  c === Math.max(a, b, c)
) {
  console.log(Math.max(a, b, c));
  a = 99;
  b = 33;
  c = 59;
  if (
    a === Math.max(a, b, c) ||
    b === Math.max(a, b, c) ||
    c === Math.max(a, b, c)
  ) {
    console.log(Math.max(a, b, c));
  }
}

// 4.
let str1 = "Javascript";
let str2 = `Py ${str1}`;

if (str2.slice(0, 2) === "Py") {
  console.log(str1);
}

// 5.
let x = 37;
let y = 28;

if (x + y > 50 && x + y < 80) {
  console.log(65);
} else {
  console.log(80);
}

// 6
let x1 = 4;
let y1 = 12;

if (x1 + y1 === 8 || x1 - y1 === 8) {
  console.log(true);
}

// 7.
let x2 = 5;
let y2 = 20;

if (x2 === 15 || y2 === 15 || x2 + y2 === 15) {
  console.log(true);
}

// 8.
let x3 = 35;
let y3 = 80;

if (x3 % 7 === 0 || y3 % 11 === 0) {
  console.log(true);
}

// 9.
let x4 = 15;
let y4 = 12;
let sum = x4 + y4;

if (x4 === y4) {
  console.log(3 * sum);
}

// 10
let x5 = 48;

if (x5 > 19) {
  console.log(2 * (x5 - 19));
}
