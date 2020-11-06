// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let value1 = 50 ;
let value2 = 100 ;

if(value1 || value2 >= 50 && value1 || value2 <= 99) {
    console.log('true');
} else{
    console.log('false') ; 
} // true 

//2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

let value3 = 100 ;
let value4 = 20 ;
let value5 = 45 ;

if(value3 >= 50 && value3 <= 99) {
    console.log('true');
}else if(value4 >= 50 && value4 <= 99) {
    console.log('true');
}else if(value5 >= 50 && value5 <= 99) {
    console.log('true');
}else {
    console.log('false');
} // false 

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 
let a = 150 ;
let b = 100 ;
let c = 500 ;
let highestValue = Math.max(a, b, c) ;
console.log('highest value ==>', highestValue) ; // highest value ==> 15
// ==> this code returns the highest value but not doesnt tell me which one of the variables has the highest value
if(a >= b && a >= c){
    console.log('a has highest value') ;
}else if(b >= a && b >= c) {
    console.log('b has highest value') ;
} else {
    console.log('c has highest value') ;
} // c has highest value

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.


// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 
let intOne = 20 ;
let intTwo = 10 ;
let sum = intOne + intTwo ; 
if(sum >= 50 && sum <= 80) {
    console.log('print 65') ;
}else{
    console.log('print 80') ;
} // print 80 ===> false 

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let num1 = 40 ;
let num2 = 10; 

let result1 = num1 + num2 ;
let result2 = num1 - num2 ; 

if(result1 === 8 || result2 === 8) {
    console.log('true') ;
}else{
    console.log('false') ; 
} // false 

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.

let num3 = 16 ;
let num4 = 15 ;
let sumOf = num3 + num4 ;

if(num3 === 15 || num4 === 15){
    console.log('true') ;
}else if(sum === 15){
    console.log('true') ;
}else{
    console.log('false') ;
} // true

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let num5 = 8; 
let num6 = 22; 

if(num5 % 7 === 0 || num6 % 11 === 0){
    console.log("true");
}else{
    console.log("false") ;
} // true

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let num7 = 2 ;
let num8 = 2 ;
let sum1 = num7 + num8 ;

if(num7 === num8){
    console.log(sum1 * 3) ;
}else{
    console.log('false')
} ; // 12

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let num9 = 10 ;
let diff = 19 - num9 ;

if(num9 > 19) {
    console.log(diff * 2) ;
}else{
    console.log('false') ;
} // false 


