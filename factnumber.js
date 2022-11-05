var number = 145;
var temp = number;
var digit = 0;
var factorial = 1;
var sum = 0;
while (number > 0) {
  digit = number % 10;
  for (var i = 1; i <= digit; i++) {
    factorial = factorial * i;
  }
  console.log(factorial);
  sum += factorial;
  factorial = 1;
  number = Math.floor(number / 10);
}

console.log(number);
console.log(sum);

if (sum == temp) {
  console.log("number is strong");
} else {
  console.log("number is not strong");
}
