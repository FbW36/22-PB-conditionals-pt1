// 1
val1a = 10;
val1b = 10;
if (val1a >= 50 && val1a <= 99 && val1b >= 50 && val1b <= 99) {
  console.log("Both are in the range");
} else console.log("At least one of them are not in the range ");

// 2
val2a = 80;
val2b = 30;
val2c = 30;
if (
  (val2a >= 50 && val2a <= 99) ||
  (val2b >= 50 && val2b <= 99) ||
  (val2c >= 50 && val2c <= 99)
) {
  console.log("At least one value is in the range");
} else console.log("No value is in the range");

// 3
a = 30;
b = 20;
c = 10;
if (a > b && a > c) {
  console.log("a is the bigger number");
} else if (b > a && b > c) {
  console.log("b is the bigger number");
} else console.log("c is the bigger number");

// 3 using equal values for different variables
a1 = 40;
b1 = 20;
c1 = 40;
result = Math.max(a1, b1, c1);
console.log("result ==>", result);

// 4
str = "Tony";
strPy = "Py" + str;
if (strPy.slice(0, 2) === "Py") {
  console.log("strPy ==>", strPy);
} else console.log("not match");

// 5
num5a = 40;
num5b = 30;
if (num5a + num5b >= 50 && num5a + num5b <= 80) {
  console.log("65");
} else console.log("80");

// 6
num6a = 1;
num6b = 9;
if (num6a + num6b === 8 || num6a - num6b === 8 || num6b - num6a === 8) {
  console.log(true);
}

// 7
num7a = 11;
num7b = 4;
if (num7a == 15 || num7b == 15 || num7a + num7b == 15) {
  console.log(true);
}

// 8
num8a = 22;
num8b = 13;
if (num8a % 7 == 0 || num8b % 7 == 0 || num8a % 11 == 0 || num8b % 11 == 0) {
  console.log(true);
}

// 9
num9a = 2;
num9b = 2;
sum9 = num9a + num9b;
if (num9a == num9b) {
  console.log(sum9 * 3);
}

// 10
num10 = 39;
if (num10 - 19 > 19) {
  console.log((num10 - 19) * 2);
}

// 11
