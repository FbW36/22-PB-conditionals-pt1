// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let num1 = 3;
let num2 = 90;

if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)){
    console.log(true);
} else {
        console.log(false); // false
    }

    
// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let int = 20;
let int2 = 200;
let int3 = 95;

if ((int >= 50 && int <= 99) || (int2 >= 50 && int2 <= 99) || (int3 >= 50 && int3 <= 99)) {
    console.log(true); // true
}
else {
    console.log(false);
}

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 
let a = 1192;
let b = 1192;
let c = 928;

if (a >= b && a >= c) {
    console.log(a); // 1192
}
else if (b >= a && b >= c) {
    console.log(b); // 1192
    }
    else { console.log(c); }


// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let str = "given string"
let newStr = "Py" + str;
if (newStr.startsWith("Py")) {
    console.log(str); // given string
}


// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 
let int4 = 9;
let int5 = 1;
console.log(int4 + int5); // 8
if (int4 + int5 >= 50 && int4 + int5 <= 80) {
    console.log(65);
}
else {
    console.log(80); // 80
}

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
if (int4 + int5 == 8 || int4 - int5 == 8) {
    console.log(true); // true
}

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 
let int6 = 7;
let int7 = 7;
if (int6 || int7 == 15 || int4 + int5 == 15) {
    console.log(true); // true
}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let int8 = 14;
let int9 = 15;

if ((int8 % 7 == 0 || int9 % 7 == 0) || (int8 % 11 == 0 || int9 % 11 == 0)) {
    console.log("multiple of 7 or 11", true); // multiple of 7 or 11 true
}

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 
let int10 = 9;
let int11 = 9;
let sum = int10 + int11;
if(int10 == int11) {
    console.log("triple sum", sum * 3); // 54
}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let int12 = 20;
let dif = int12 - 19;
if (int12 > 19) {
    console.log("double difference", dif * 2); // 2
}

// 11. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 