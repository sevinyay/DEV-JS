var number = 14541;
var digit = 0;
var reversal = 0;
var temp = number;
while (number > 0) {
  digit = number % 10;
  reversal = reversal * 10 + digit;

  number = Math.floor(number / 10);
}

if (reversal == temp) {
  console.log(temp + " number is palindrome");
} else {
  console.log(temp + " number is not palindrome");
}
