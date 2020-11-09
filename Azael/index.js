// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let numToCheck1 = 99;
let numToCheck2 = 79;

if (
  numToCheck1 >= 50 &&
  numToCheck1 <= 99 &&
  numToCheck2 >= 50 &&
  numToCheck2 <= 99
) {
  console.log("True");
} else {
  console.log("The numbers are out of the range");
}
// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

let numToCheck3 = 99;
let numToCheck4 = 79;
let numToCheck5 = 50;
if (
  numToCheck3 >= 50 &&
  numToCheck3 <= 99 &&
  numToCheck4 >= 50 &&
  numToCheck4 <= 99 &&
  numToCheck5 >= 50 &&
  numToCheck5 <= 99
) {
  console.log("True");
} else {
  console.log("The numbers are out of the range");
}

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.

let a = 13;
let b = 900;
let c = -2;

if (a > b && a > c) {
  console.log(a);
}
if (b > a && b > c) {
  console.log(b);
}
if (c > a && c > b) {
  console.log(c);
}

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let str1 = "Py";

let str2 = "thon";
if (str2.substring(0, 2) == "Py") {
  console.log(str2);
} else {
  console.log(str1 + str2);
}

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

let num1 = 55;
let num2 = 33;
let sum = num1 + num2;
if (sum >= 50 && sum <= 80) {
  console.log(65);
} else {
  console.log(80);
}
// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let num3 = 5;
let num4 = 3;

let sum1 = num3 + num4;
let rest1 = num3 - num4;

if (sum1 == 8 || rest1 == 8) {
  console.log("true");
}

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let num5 = 9;
let num6 = 15;
let sum2 = num5 + num6;
let rest2 = num5 - num6;

if (sum2 == 15 || rest2 == 15 || num5 == 15 || num6 == 15) {
  console.log("true");
}
// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let num7 = 1;
let num8 = 63;

if (num7 % 7 == 0 || num8 % 7 == 0) {
  console.log("true");
} else if (num7 % 11 == 0 || num8 % 11 == 0) {
  console.log("true");
}

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let num9 = 5;
let num10 = 5;
let sum3 = num9 + num10;
if (num9 == num10) {
  console.log(sum3 * 3);
}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let num69 = 39;
rest3 = num69 - 19;
if (rest3 >= 19) {
  console.log(2 * rest3);
}

// 11. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.
