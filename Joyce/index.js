// 1.Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let num1 = 28;
let num2 = 59;

if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
  console.log(true);
} else {
  console.log(false);
}

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let value1 = 40;
let value2 = 78;
let value3 = 101;

let resValue1 = value1 >= 50 && value1 <= 99;
let resValue2 = value2 >= 50 && value2 <= 99;
let resValue3 = value3 >= 50 && value3 <= 99;

if (resValue1 || resValue3 || resValue3) {
  console.log(true);
}

// 3. Declare the variables a, b and c, and give them number values.
//Check which one out of the three variables has the largest value and print it to the console.
//Then change the values of the variables to see if your conditional still works.
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

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let str1 = "Javascript";
let str2 = `Py ${str1}`;

if (str2.slice(0, 2) === "Py") {
  console.log(str1);
}

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let x = 37;
let y = 28;

if (x + y >= Math.round(50) && x + y <= Math.round(80)) {
  console.log(65);
} else {
  console.log(80);
}

// 6 Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let x1 = 4;
let y1 = 12;

if (x1 + y1 === 8 || x1 - y1 === 8 || Math.abs(y1 - x1) === 8) {
  console.log(true);
}

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let x2 = 5;
let y2 = 20;

if (x2 === 15 || y2 === 15 || x2 + y2 === 15) {
  console.log(true);
}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let x3 = 35;
let y3 = 80;

if (x3 % 7 == 0 || x3 % 11 == 0 || y3 % 7 == 0 || y3 % 11 == 0) {
  console.log(true);
}

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let x4 = 15;
let y4 = 12;
let sum = x4 + y4;

if (x4 === y4) {
  console.log(3 * sum);
}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let x5 = 48;

if (x5 > 19) {
  console.log(2 * (x5 - 19));
}
