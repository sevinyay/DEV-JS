var number = [14541, 121, 267, 1221, 123, 456, 444, 545345, 999, 4327];
for (let i = 0; i < number.length; i++) {
  var temp = number[i];
  var digit = 0;
  var reversal = 0;
  while (number[i] > 0) {
    digit = number[i] % 10;
    reversal = reversal * 10 + digit;

    number[i] = Math.floor(number[i] / 10);
  }

  if (reversal == temp) {
    console.log(temp + " number is palindrome");
  } else {
    console.log(temp + " number is not palindrome");
  }
}
