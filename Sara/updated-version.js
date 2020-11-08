

// 1 ) Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let a = 5;
let b = 100;

if((a >= 50 && a <=99) || (b >= 50 && b <= 99 )){
    console.log(`True! Both or (one) of ${a} or ${b} is between 50-99!`);
}else{
    console.log(`False, ${a} and ${b} is not between 50-99!`);
}

// 2) Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let x = 7;
let y = 3;
let z = 8;

if((x >= 50 && x <= 99) || (y >= 50 && y <= 99)){
    console.log("true");    
}
else if(z >= 50 && z <= 99){
    console.log("true");
}else{
    console.log("false ");
}; 

// 3) Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 
let one = 25;
let two = 5;
let three = 10;

if(one >= two && one >= three){
    console.log(one)
}else if(two >= one && two >= three){
    console.log(two)
}else{
    console.log(three)
} ; 

// 4) Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let originalString = "Hello World";
let newString = "Py Hello World";

if(newString.includes("Py") && newString.startsWith("Py")){
    console.log(originalString)
}else{
    console.log(newString)
}; // Hello World 

// 5) Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 
let int1 = Math.ceil(Math.random() * 49); 
let int2 = Math.ceil(Math.random() * 49);
let sum = int1 + int2; 

if(sum >= 50 && sum <= 80) {
    console.log(65)
}else{
    console.log(85)
};

// 6) Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let value1 = 11 ;
let value2 = 2;

let sum2 = value1 + value2; 
let differance = Math.abs(value1 - value2);

if(sum2 === 8 || differance === 8){
    console.log(`True, either the sum ${sum2} or the difference ${differance} is equal to 8 (or both)!`)
}else{
    console.log(`False, neither the sum ${sum2} or the difference ${differance} is equal to 8!`)
}; // False, neither the sum 13 or the difference 9 is equal to 8!

// 7) Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 
let p = Math.floor(Math.random() * 25);
let s = Math.floor(Math.random() * 25);

let sum3 = p + s; 
if(p === 15 || s === 15){
    console.log(`True, one (or both) og ${p} and ${s} has the vaule of 15!`)
}else if(sum3 === 15){
    console.log(`True, the sum of ${p} and ${s} is equal to 15!`)
}else{
    console.log(`False, neither ${p} and ${s} has the value of 15 nor together the sum of 15! In this case the sum is ${sum3}!`)
}; 

// 8) Check whether one of two integers is a multiple of 7 or 11. If so, print true. 

let k = Math.floor(Math.random() * 50);
let c = Math.floor(Math.random() * 50);

let checkMultiples = k % 7 === 0 || k % 11 ===  0 || c % 7 === 0 || c % 11 === 0; 

if(checkMultiples){
    console.log(`${k} or ${c} is a multiple of 7 or 11 (or both)`)
}else{
    console.log(`Neither of ${k} or ${c} is a multiple of 7 or 11`)
}; 

// 9) Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 

let intOne = Math.floor(Math.random() * 10);
let intTwo = Math.floor(Math.random() * 10);
let sumOne = intOne + intTwo; 

if( intOne === intTwo){
    console.log(`${intOne} and ${intTwo} is the same!! You have won € ${sumOne * 3}!!!`)
}else{
    console.log(`Sorry ${intOne} and ${intTwo} is not the same, you lost!`)
}; // 8 and 8 is the same!! You have won € 48!!! 

// Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let specifiecNumber = 101; 
let difference1 = Math.abs(specifiecNumber - 19);

if(specifiecNumber > 19) {
    console.log(`${specifiecNumber} is greater than 19, difference * 2 = ${difference1 * 2}`)
} ; 

// BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 

