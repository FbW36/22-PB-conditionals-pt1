//22-PB-conditionals-pt1
//Programming Basics: Conditionals

//These exercises are aimed at making you more comfortable with using conditionals as well as operators. Use "if" statements to complete the following exercises. Print your results to the console.

//1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

let x = 10
let y = 10
const values = [x, y]
if((x >= 50 && x <= 99) || (y >= 50 && y <= 99)){
    console.log(`Exercise 1 => ${(x >= 50 && x <= 99) || (y >= 50 && y <= 99)} ! One (or both) of them is/are in range!`)
}else{
    console.log(`Exercise 1 => ${(x >= 50 && x <= 99) || (y >= 50 && y <= 99)} ! none of them are in range :c`)
}

//2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let x1 = 90
let y1 = 90
let z1 = 90
const values2 = [x1,y1,z1]
if((x1 >= 50 && x1 <= 99) || (y1 >= 50 && y1 <= 99) || (z1 >= 50 && z1 <= 99)) {
    console.log(`Exercise 2 => ${(x1 >= 50 && x1 <= 99) || (y1 >= 50 && y1 <= 99) || (z1 >= 50 && z1 <= 99)} ! One (or both) of them is/are in range!`)
}else{
    console.log(`Exercise 2 => ${(x1 >= 50 && x1 <= 99) || (y1 >= 50 && y1 <= 99) || (z1 >= 50 && z1 <= 99)} ! none of them are in range :c`)
}



//3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a = 11
let b = 22
let c = 33

if ((a >= b && a >= c)){
    console.log(`Exercise 3 => Variable a with ${a} is the largest`)
}else if(b >= a && b >= c) {
    console.log(`Exercise 3 => variable b with ${b} is the largest`)
}else{
    console.log(`Exercise 3 => variable c with ${c} is the largest`)
}

//4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let str1 = 'Py'
let str2 = 'Hello World'
if(str2.substring(0,2)== 'Py'){
    console.log(str2)
}else{
    console.log(str1 + str2)
}


//5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let integer1 = 10
let integer2 = 20
let sum = integer1 + integer2
if(sum >= 50 && sum <= 80){
    console.log(`${sum} is the result so => 65`)
}else{
    console.log(`${sum} is the result so => 80`)
}

//6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let integer3 = 10
let integer4 = 2
let sumIntegers = integer3 + integer4
let diffintegers = integer3 - integer4

if((sumIntegers == 8) || (diffintegers == 8)){
    console.log(true)
}else{
    console.log(false)
}

//7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let integer5 = 8
let integer6 = 7
let sumIntegers1 = integer5 + integer6
console.log(sumIntegers1)

if((sumIntegers1 == 15) || (integer5 == 15) || (integer6 == 15)){
    console.log(`Exercise 7 =>true`)
}else{
    console.log(`Exercise 7 => false`)
}

//8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let integer7 = 22
let integer8 = 2
if((integer7 % 7 == 0 || integer7 % 11 == 0) || (integer8 % 7 == 0 || integer8 % 11 == 0)){
    console.log(`Exercise 8 => true`)
}else{
    console.log(`Exercise 8 =>false`)
}

//9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
let integer9 = 10
let integer10 = 10
let sum9 = integer9 + integer10
if(integer9 == integer10){
    console.log("Exercise 9 => numbers are the same", sum9 * 3)
}else{
    console.log("Exercise 9 => numbers are not the same", sum9)
}

//10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let integer11 = 12
let integer12 = 19
let sum10 = integer11 - integer12
if(integer11 > integer12){
    console.log(`Exercise 10 => ${integer11} is greater than 19 (double difference)=>`,sum10*2 )
}else{
    console.log(`Exercise 10 => ${integer11} is less than 19 =>`,sum10 )
}

//BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. DONE IT :> 