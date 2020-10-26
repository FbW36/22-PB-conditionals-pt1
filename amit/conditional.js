// 1 Check if two given integer values are in the range 50 to 99
//(this includes both 50 and 99). Print true if either of them are in the rang

let num1 = 50;
let num2 = 99;

if (num1 && num2 >= 50 && num1 && num2 <= 99) {
  console.log("ans1=", true); // true
} else {
  console.log("ans1=", false);
}

// 2 Check if three given integer values are in the range 50 to 99 (inclusive).
// Print true if one or more of them are in the range.
let num3 = 50;
let num4 = 99;
let num5 = 80;
if (num3 && num4 && num5 >= 50 && num3 && num4 && num5 <= 99) {
  console.log("ans2=", true);
} else {
  console.log("ans2=", false); // false
}

// 3 Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a = 19;
let b = 17;
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
// 4 Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let str = "python";
if (str.includes("py") === true) {
  console.log("ans4=", str);
} else {
  console.log("ans4=", not);
}

// 5 Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let numbr1 = 30;
let numbr2 = 40;
let sum = numbr1 + numbr2;
console.log(sum); // 70

if (sum >= 50 && sum <= 80) {
  console.log("ans5=", 65); // 65
} else {
  console.log("ans5=", 80);
}

// 6 Check whether the sum of two integers is 8,
//or whether their difference is 8. If one of these is the case, print true.
let int1 = 5;
let int2 = 3;

if (int1 + int2 === 8 || int1 - int2 === 8) {
  console.log("ans6=", true);
} else {
  console.log("ans6=", false);
}

// 7 Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let int3 = 10.0;
let int4 = 4;
if (int3 || int4 === 15 || int3 + int4 === 15) {
  console.log("ans7=", true);
} else {
  console.log("ans7=", false);
}

// 8 Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let integer5 = 79;
let res = integer5 % 7 === 0;
let res2 = integer5 % 11 === 0;
if (res || res2 === true) {
  console.log("ans8=", true);
} else {
  console.log("ans8=", false); // false
}
// 9 Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let one = 2;
let two = 2;
if (one === two) {
  console.log("ans9=", Math.pow(one, 3));
} else {
  console.log("ans9=", 0);
}

// 10 Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let numbrr = 21;
let numbrr2 = 19;
let difference = numbrr - numbrr2;
if (numbrr > numbrr2) {
  console.log("ans10=", Math.pow(difference, 2)); // 4
} else {
  console.log("ans10=", false);
}
