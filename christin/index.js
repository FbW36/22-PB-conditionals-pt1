//? 1. Check if two given integer values are in the range 50 to 99(this includes both 50 and 99).Print true if either of them are in the range.*/

let val1 = 78;
let val2 = 13;

if (val1 >= 50 && val1 <= 99) {
  console.log("1. ==> ", "true");
} else if (val2 >= 50 && val2 <= 99) {
  console.log("1. ==> ", "true");
} else {
  console.log("1. ==> ", "False");
}

//? 2. Check if three given integer values are in the range 50 to 99(inclusive).Print true if one or more of them are in the range.

let val3 = 99;

if (val1 >= 50 && val1 <= 99) {
  console.log("2. ==> ", "true");
} else if (val2 >= 50 && val2 <= 99) {
  console.log("2. ==> ", "true");
} else if (val3 >= 50 && val3 <= 99) {
  console.log("2. ==> ", "true");
} else {
  console.log("2. ==> ", "False");
}

//? 3.Declare the variables a, b and c, and give them number values.Check which one out of the three variables has the largest value and print it to the console.Then change the values of the variables to see if your conditional still works.

let a = 99;
let b = 99;
let c = 88;

if (a > b && a > c) {
  console.log(`${a} is the largest value`);
} else if (b > a && b > c) {
  console.log(`${b} is the largest value`);
} else if (c > a && c > b) {
  console.log(`${c} is the largest value`);
} else {
  console.log("No highest value, at least 2 variables are equal");
}

//? 4. Create a new string adding "Py" in front of a given string.If the given string begins with "Py" then print the original string.

let oldString = "thon";
let newString = "Py".concat(oldString);

if (newString.includes("Py", 0)) {
  console.log("newString with Py true==>", oldString);
} else {
  console.log("new String with Py false", newString);
}
// thon

//? 5. Calculate the sum of the two integers.If the sum is in the range 50 to 80, print 65, otherwise print 80.

let val5 = 35;
let val6 = 67;
let sum = val5 + val6;

if (sum < 80 && sum > 50) {
  console.log("Sum between 50-80==>", 65);
} else {
  console.log("Sum outside of 50-80==>", 80);
} // 80

//? 6.Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let val7 = 24;
let val8 = 16;
let sum2 = val7 + val8;
let diff1 = val7 - val8;

if (sum2 === 8 || diff1 === 8) {
  console.log(true);
} else {
  console.log(false);
}

// true

//? 7.Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

if (sum2 === 15 || val7 === 15 || val8 === 15) {
  console.log("sum 15:", true);
} else {
  console.log("non is 15:", false);
}

// non is 15 - false

//? 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

let val9 = 22;
let val10 = 90;

if (val9 % 11 === 0 || val9 % 7 === 0 || val10 % 11 === 0 || val10 % 7 === 0) {
  console.log("Multiple 7 / 11?:", true);
} else {
  console.log("Integers are no multiple of 7 or 11");
}

//? 9.Calculate the sum of the two given integers.If the two values are the same, then print triple their sum.

let val11 = 9;
let val12 = 9;

let sum3 = val11 + val12;

if (val11 === val12) {
  console.log("true - triple sum", sum3 * 3);
} else {
  console.log("simple sum:", sum3);
}

//? 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let numb1 = 77;
let res1 = numb1 - 19;

if (res1 > 19) {
  console.log(">19 double:", res1 * 2);
} else {
  console.log("<19 norm result", res1);
}

//? 11.BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code ?; etc.

// done
