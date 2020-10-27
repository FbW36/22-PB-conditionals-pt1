// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let value = 101;
let otherValue = 77;
console.log("Is at least one value beween 50-99?", (value <= 99 && value >= 50) || (otherValue <= 99 && otherValue >= 50));

// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let value1 = 50;
let value2 = 60;
let value3 = 100;
console.log("Are at least 1 of these 3 numbers between or equal to 50-99? 50, 60, 99: ", (value1 <= 99 && value1 >= 50) || (value2 <= 99 && value2 >= 50) || (value3 <= 99 && value3 >= 50));

// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a = 1;
let b = 217;
let c = 4242;

if (a > (b || c)) {
    console.log(a, "is the biggest");
} else if (b > (a || c)) {
    console.log(b, "is the biggest")
} else {
    console.log(c, "is the biggest")
}

// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let newC = "Py" + c;
console.log(newC);  //Py4242
newNewC = newC.split(4);
console.log(newNewC); 

if(newNewC[0] == "Py"){
    console.log(newC);
} 

// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let one = 80;
let two = 10;
if(one + two > 50 && one + two < 80){
    console.log("65")
}else{
    console.log("80");
}

// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
if(one + two == 0 || one - two == 8){
    console.log("true")
}else{
    console.log("false");
}

// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let value4 = 15;
let value5 = 14;
console.log("Are at least one value 15?", value4 === 15 || value5 === 15 || value4 + value5 === 15);

// Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let value6 = 77;
let value66 = 6;
console.log("Is 77 or 6 a multiple of 7 or 11?", ((value6 % 7 === 0 || value6 % 11 === 0) || (value66 % 7 === 0 || value66 % 11 === 0)));

// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let value7 = 5;
let value8 = 5;
let sumOfValues = value7 + value8;

if (value7 === value8) {
    console.log("if value(5) equals(5), print triple of their sum", sumOfValues * 3);
}

// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let value9 = 77;
let difference = value9 - 19;
if (value9 > 19) {
    console.log("print double the difference is the number is bigger than 19", difference * 2);
}

// BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.