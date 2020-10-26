// 1. Check if two given integer values are in the range 50 to 99(this includes both 50 and 99).Print true if either of them are in the range.

let int1 = 24;
let int2 = 100;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
  console.log(true);
} else {
  console.log(false);
}

// 2. Check if three given integer values are in the range 50 to 99(inclusive).Print true if one or more of them are in the range.

let int3 = 99;

if (
  (int1 >= 50 && int1 <= 99) ||
  (int2 >= 50 && int2 <= 99) ||
  (int3 >= 50 && int3 <= 99)
) {
  console.log(true);
} else {
  console.log(false);
}

// 3. Declare the variables a, b and c, and give them number values.Check which one out of the three variables has the largest value and print it to the console.Then change the values of the variables to see if your conditional still works.
let a = 199;
let b = 170;
let c = 190;

if (a - b < 0) {
  if (b - c < 0) {
    console.log(c);
  } else {
    console.log(b);
  }
} else if (a - c < 0) {
  console.log(c);
} else {
  console.log(a);
}

// 4. Create a new string adding "Py" in front of a given string.If the given string begins with "Py" then print the original string.
let str = "string";
const strArr = ["Py", str];
let newStr = strArr.join("");
console.log(newStr);

if (newStr.slice(0, 2) === "Py") {
  console.log(str);
} else {
  console.log(false);
}

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
// I'm gonna use the int variable from exercise 1
if (int1 + int2 >= 50 && int1 + int2 <= 80) {
  console.log(65);
} else {
  console.log(80);
}

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let num1 = 20;
let num2 = 12;
if (num1 + num2 === 8 || num1 - num2 === 8) {
  console.log(true);
} else {
  console.log(false);
}

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
// going to use the integers in ex 6
if (num1 === 15 || num2 === 15 || num1 + num2 === 15) {
  console.log(true);
} else {
  console.log(false);
}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
// use the integers in ex 6
if (num1 % 7 === 0 || num2 % 7 === 0 || num1 % 11 === 0 || num2 % 11 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
// ex6
let sum = num1 + num2;
if (num1 === num2) {
  console.log(sum * 3);
} else {
  console.log(sum);
}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let sum2 = num1 - 19;
if (sum2 <= 19) {
  console.log(sum2);
} else {
  console.log(sum2 * 2);
}

// 11. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code ?; etc.
