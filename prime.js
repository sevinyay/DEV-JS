var number = 25;
counter = 0;

for (var i = 2; i < number; i++) {
  if (number % i == 0) {
    counter++;
  }
}
if (counter == 0) {
  console.log(number + "is prime number");
} else {
  console.log(number + "is not prime number");
}
