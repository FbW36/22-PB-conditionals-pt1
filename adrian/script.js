//Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let integer0 = 55;
let integer1 = 86;
if ((integer0 >= 50 && integer0 <= 99) || (integer1 >= 50 && integer1 <= 99)) {
  console.log(true);
}

//Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let integer2 = 44;
if (
  (integer0 >= 50 && integer0 <= 99) ||
  (integer1 >= 50 && integer1 <= 99) ||
  (integer2 >= 50 && integer2 <= 99)
) {
  console.log(true);
}
// Declare the variables a, b and c, and give them number values.
//Check which one out of the three variables has the largest value and print it to the console.
//Then change the values of the variables to see if your conditional still works.
let a = 0;
let b = 1;
let c = 2;
//c = 34
console.log(Math.max(a, b, c));
// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let givenString = "hello";
let newString = `Py${givenString}`;
let originalString = "The original string?";
if (givenString.slice(0, 2) === "Py") console.log(originalString);
// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let integer3 = 34;
let integer4 = 17;
if (integer3 + integer4 > 50 && integer3 + integer4 < 70) console.log(65);
else console.log(80);

// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let integer5 = 11;
let integer6 = 3;
if (integer5 + integer6 === 8 || integer5 - integer6 === 8) console.log(true);

// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let integer7 = 12;
let integer8 = 3;
if (integer7 === 15 || integer8 === 15 || integer8 + integer7 === 15)
  console.log(true);

// Check whether one of two integers is a multiple of 7 or 11. If so, print true.
if (integer7 % 7 === 0 || integer7 % 11 === 0) console.log(true);

// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let integer9 = 12;
let integer10 = 12;
if (integer9 === integer10) console.log(3 * (integer9 + integer10));
else console.log(integer9 + integer10);

// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let specifiedNumber = 20;
if (specifiedNumber - 19 > 0) console.log(2 * (specifiedNumber - 19));

// BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.
