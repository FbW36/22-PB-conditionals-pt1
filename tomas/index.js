let log = console.log;

// Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range
let x = 1;
let y = 100;
let result;
if((x < 50 || x > 99) && (y < 50 || y > 99)) {
    log('either of two integers are in range -->', result = true);
}


// Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range
let z = 50;
if((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
    log('one or more integers are in range -->', result = true);
}

// Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works
let a = 5;
let b = 61;
let c = 1896;
if(a > b && a > c) {
    log('largest number is', a);
}
else if(b > a && b > c) {
    log('largest number is', b);
}
else {
    log('largest number is', c);
}

// Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string
let str = 'thagoras';
let newStr = 'Py' + str;
let strArr = newStr.split('t');
if(newStr.includes('Py')) {
    log('original string printed -->', str)
}

// Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80
let x1 = 7;
let y1 = 75;
if((x1 + y1) >= 50 && (x1 + y1) <= 80) {
    log(65);
}
else {
    log(80);
}

// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true
let x2 = 5;
let y2 = 3;
if((x2 + y2) == 8 || (x2 - y2) == 8) {
    log('6 -->', true);
}

// Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true
let x3 = 7;
let y3 = 8;
if((x3 != 15 && y3 != 15) || (x3 + y3 == 15)) {
    log('7 -->', true);
}

// Check whether one of two integers is a multiple of 7 or 11. If so, print true
let x4 = 49;
let y4 = 16;
if((x4 % 7 === 0) || (x4 % 11 === 0) || (y4 % 7 === 0) || (y4 % 11 === 0)) {
    log('8 -->', true);
}

// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum
let x5 = 3;
let y5 = 3;
let sum = x5 + y5;
if(x5 === y5) {
    log('triple sum =', sum * 3);
}

// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19
let z2 = 22;
let difference = z2 - 19;
if(z2 > 19) {
    log('diff * 2 =', difference * 2);
}