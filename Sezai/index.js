//These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

//Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.


let num1 = 49;
let num2 = 100;

if(num1 >=50 && num2 <= 90){
    console.log("they are in the range of 50 and 90 ==> ");
}else {
    console.log("they are NOT in the range of 50 and 90");
}


//Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

let num3 = 100;

if(num1>=50 || num2 <=99 || num3 <=99){
    console.log("they are in the range of 50 and 99");
} else{
    console.log("they are NOT in the range of 50 and 99");
}

//  Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.

let a=33
let b=66666
let c=99

let highestValue = Math.max(a,b,c);
console.log("highest Value", highestValue);


//Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let givenString = "Py cats are cute, but dogs also"
if(givenString.includes("Py")){
    console.log("Py ==> ", givenString);
}else{
    console.log("does not include Py");
}

//  Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.

let integer1 = 55;
let integer2 = 30;
let sum = integer1 + integer2;

if(sum>=50 && sum<=80){
    console.log("65");
}else {
    console.log("80");
}


// Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

let integer3 = 16;
let integer4 = 8;
let sum2 = integer3 + integer4;
let difference = integer3 - integer4;

if( sum2 == 8 || difference == 8){
    console.log("true");
} else {
    console.log("false");
}


//  Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

let value1 = 17;
let value2 = 0;
let sum3 = value1+value2;
if(value1 == 15 || value2 == 15 || sum3 == 15){
    console.log("true");
}else {
    console.log("not true");
}



// Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let integer5 = 14;
let integer6 = 22;

let mod1 = integer5%7
let mod2 = integer5%11
let mod3 = integer6%7
let mod4 = integer6%11

console.log("mod", mod1, mod2, mod3, mod4);

if(mod1 == 0 || mod2 == 0 || mod3 == 0 || mod4 == 0){
console.log("true");}


// Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.

let integer7 = 5;
let integer8 = 5;
if(integer7 === integer8){
    console.log(3*(integer7+integer8));
} else {
    console.log("theyre not the same");
}


// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

let integer9 = 21
let integer10= 19;
let calc = integer9-integer10
if(integer9>integer10){
    console.log(2*calc);
}


//     BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc.