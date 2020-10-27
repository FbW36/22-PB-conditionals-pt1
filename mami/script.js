// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
let kazu = 30
let kazu2 = 90
if(kazu>=50 && kazu<=99 || kazu2>=50 && kazu2<=99 ) {
    console.log('is there any number 50=< kazu <=99 ---','true');
}
// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let kazu3 = 30

if(kazu>=50 && kazu<=99 || kazu2>=50 && kazu2<=99 ||kazu3>=50 && kazu3<=99 ) {
    console.log('is ther any number 50=< kazu <=99 ---','true');
}

// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 

let a = 30
let b = 40
let c = 50

if(a>b && a>c) {
    console.log('a is the hightest number');
} else if(b>a && b>c){
    console.log('b is the hightest number');
}else 
    console.log('c is the hightest number');


// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

let string = 'son';
let newString = 'Py' + string;
console.log(newString.slice(0,2));
if(newString.slice(0,2)=== 'Py'){

    console.log(string)
}

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 
let sum = 55+ 23;

if(sum>50 && sum<80) {
    console.log('65')
}else 
    console.log('80');

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

if(kazu+kazu2 === 8 || Math.abs(kazu-kazu2) === 8) {
    console.log('6--',true);
} else console.log('6--',false)
// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 
if((kazu ===15 || kazu2 ===15)||kazu+kazu2 === 15) {
    console.log('7--','true')
}
// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
if(kazu%7 === 0 ||kazu2%7 === 0||kazu%11 === 0 ||kazu2%11 === 0); {
    console.log('8--','true')

}
// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 
// this question does not make sense at all??????
let sum2 = kazu+ kazu2;
let sum3 = kazu+ kazu3;
if(sum2 === sum3) {
    console.log('9--',sum*3);
}
// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let diff =Math.abs(kazu-19);
if (kazu>19 ) {
  console.log('11--',diff*2)
}
// 11. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 
