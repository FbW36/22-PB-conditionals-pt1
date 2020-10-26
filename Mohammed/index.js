// 1.
lowerLimitNum = 50;
upperLimitNum = 99;

let firstNum = 10;
let secondNum = 20;

/* if(firstNum >= lowerLimitNum && firstNum <= upperLimitNum)
{
    console.log(firstNum >= lowerLimitNum && firstNum <= upperLimitNum);
    if(secondNum >= lowerLimitNum && secondNum <= upperLimitNum)
    {
        console.log(`The numbers ${firstNum} and ${secondNum} are in the range between ${lowerLimitNum} and ${upperLimitNum}`);
    }
}   */

if ( ((firstNum >= lowerLimitNum) && (firstNum <= upperLimitNum)) &&    
   ((secondNum >= lowerLimitNum) && (secondNum <= upperLimitNum)) )
{
    console.log(`The numbers ${firstNum} and ${secondNum} are in the range between ${lowerLimitNum} and ${upperLimitNum} ==> ${((firstNum >= lowerLimitNum) && (firstNum <= upperLimitNum)) &&    
    ((secondNum >= lowerLimitNum) && (secondNum <= upperLimitNum))} `);
}
else
{
    console.log( `The numbers ${firstNum} and ${secondNum} are in the range between ${lowerLimitNum} and ${upperLimitNum} ==> ${((firstNum >= lowerLimitNum) && (firstNum <= upperLimitNum)) &&    
    ((secondNum >= lowerLimitNum) && (secondNum <= upperLimitNum))} ` );
}

// 2-
if ( ((firstNum >= lowerLimitNum) && (firstNum <= upperLimitNum)) ||    
   ((secondNum >= lowerLimitNum) && (secondNum <= upperLimitNum)) )
{
    console.log(`The numbers ${firstNum} and ${secondNum} are in the range between ${lowerLimitNum} and ${upperLimitNum} ==> ${((firstNum >= lowerLimitNum) && (firstNum <= upperLimitNum)) ||    
    ((secondNum >= lowerLimitNum) && (secondNum <= upperLimitNum))} `);
}
else
{
    console.log(`The numbers ${firstNum} and ${secondNum} are in the range between ${lowerLimitNum} and ${upperLimitNum} ==> ${((firstNum >= lowerLimitNum) && (firstNum <= upperLimitNum)) ||    
    ((secondNum >= lowerLimitNum) && (secondNum <= upperLimitNum))} `);
}

// 3-
let fNum = 10;
let sNum = 30;
let tNum = 20;

if ( (fNum >= sNum) && (fNum > tNum) )
{
    console.log(`${fNum} is the greatest number among ${fNum}, ${sNum}, ${tNum}`);
}
else if (sNum > tNum)
{
    console.log(`${sNum} is the greatest number among ${fNum}, ${sNum}, ${tNum}`);
}
else
{
    console.log(`${tNum} is the greatest number among ${fNum}, ${sNum}, ${tNum}`);
}

// 4- 

// 5-
let intN1 = 40;
let intN2 = 70;

let sum = intN1 + intN2;

if ( (sum >= 50) && (sum <= 80) )
{
    console.log(65);
}
else
{
    console.log(80);
}

// 6-
let nbr1 = 5;
let nbr2 = 3;

if ( ( (nbr1 + nbr2) === 8)  || ( (nbr1 - nbr2) === 8) )
{
    /* console.log(( (nbr1 + nbr2) === 8)  || ( (nbr1 - nbr2) === 8)); */
    console.log(`(${nbr1} + ${nbr2}) OR (${nbr2} - ${nbr1}) = 8 ==> ${( (nbr1 + nbr2) === 8)  || ( (nbr1 - nbr2) === 8)}`)
} 
else
{
    console.log(`(${nbr1} + ${nbr2}) OR (${nbr2} - ${nbr1}) = 8 ==> ${( (nbr1 + nbr2) === 8)  || ( (nbr1 - nbr2) === 8)}`)
}

// 7-
let numb1 = 8;
let numb2 = 7;

let theSum = numb1 + numb2;

if ( (numb1 === 15) || (numb2 === 15) || ((numb1 + numb2) === 15) )
{
    console.log(` (${numb1} = 15) ==> ${(numb1 === 15)} \t (${numb2} = 15) ==> ${(numb2 === 15)} \t  (${numb1} + ${numb2}) = 15  ==> ${((numb1 + numb2) === 15)} \t The expression evaluation is: ${(numb1 === 15) || (numb2 === 15) || ((numb1 + numb2) === 15)}`);
}

// 8-
let n1 = 77;
let n2 = 20;

if ( ((n1 % 7) === 0) || ((n2 % 11) === 0) )
{
    console.log(`${n1} is multiple of 7 ==> ${((n1 % 7) === 0)} || ${n2} is multiple of 11 ==> ${((n2 % 11) === 0)} The expression is evaluated as  ${((n1 % 7) === 0) || ((n2 % 11) === 0) }`);
}
else
{
    console.log(`${n1} is multiple of 7 ==> ${((n1 % 7) === 0)} || ${n2} is multiple of 11 ==> ${((n2 % 11) === 0)} The expression is evaluated as  ${((n1 % 7) === 0) || ((n2 % 11) === 0) }`);
}

// 9-

let no1 = 2;
let no2 = 2;

sum = no1 + no2;

let eval = (no1 === no2) ? `${Math.pow(sum, 3)}` :  null;
console.log(eval);

// 10-
let theNumber = 23;
let  difference = theNumber - 19;

let doubleNo = (theNumber > 19) ? `${Math.pow(difference, 2)}` : null;
console.log(doubleNo);
// 11- Bonus --- done