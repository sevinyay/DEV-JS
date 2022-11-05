// declare an array with 10 numbers and find out strong numbers in the array.
var number = [145, 9];
for (let i = 0; i < number.length; i++) {
  var temp = number[i];
  var factorial = 1;
  var sum = 0;
  var digit = 0;
  while (number[i] > 0) {
    digit = number[i] % 10;
    for (var n = 1; n <= digit; n++) {
      factorial = factorial * n;
    }
    sum += factorial;
    factorial = 1;
    number[i] = Math.floor(number[i] / 10);
  }

  if (sum == temp) {
    console.log("number is strong");
  } else {
    console.log("number is not strong");
  }
}
