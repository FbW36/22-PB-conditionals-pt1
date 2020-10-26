//1.
let value1= 50;
let value2= 99;

if(value1>= 50 && value1<= 99){
    if(value2>= 50 && value2<= 99){
        console.log("1==>",true);
    }
}
else{
    console.log("1==>",false);
}

//2.
let int1 = 50;
let int2 = 100;
let int3 = 100;

if(int1>= 50 && int1<= 99){
    console.log("2==>",true);
}
else if(int2>= 50 && int2<= 99){
    console.log("2==>",true);
}
else if(int3>= 50 && int3<= 99){
    console.log("2==>",true);
}
else{
    console.log("2==>",false);
}

//3.
let a = 1192;
let b = 1192;
let c = 928;
if(a>=b && a>=c){
    console.log("3==> a is the biggest value");
}
else if(b>=a && b>=c){
    console.log("3==> b is the biggest value");
}
else{
    console.log("3==> c is the biggest value");
}

//4.
let newString = "Pygolope"

if(newString.includes("Py")){
    console.log("4==>",newString);
}
else{
    console.log("4==> Does not include Py");
}

//5.
let var1 = 20;
let var2 = 70;

if((var1+var2)>= 50 && (var1+var2)<=80){
    console.log("5==>",65);
}
else{
    console.log("5==>",80);
}

//6.
let number1 = 10;
let number2 = 2;

if((number1 + number2)===8 || (number1-number2)===8){
    console.log("6==>",true);
}
else{
    console.log("6==>",false);
}

//7
let math1 = 10;
let math2 = 15;

if(math1===15 || math2===15){
    console.log("7==>", true);
}
else if((math1+math2)===15){
    console.log("7==>", true);
}
else{
    console.log("7==>",false);
}

//8
let math3 = 8;
let math4 = 23;

if((math3 % 7) ===0 || (math3 % 11) ===0){
    console.log("8==>",true);
}
else if((math4 % 7) ===0 || (math4 % 11) ===0){
    console.log("8==>",true);
}
else{
    console.log("8==>",false);
}

//9
let math5 = 30;
let math6 = 30;

if(math5 === math6){
    console.log("9==>",(math5+math6)*3);
}
else{
    console.log("9==> the integers ar not the same value");
}

//10.
let math7 = 20;
if(math7>19){
    console.log("10==>",(math7-19)*2);
}
else{
    console.log("10==> math7 is not greater than 19");
}
