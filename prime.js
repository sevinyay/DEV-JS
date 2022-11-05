// declare an array with 10 numbers and find out prime numbers in the array.

var number = [2, 3, 13, 11, 23, 46, 68, 54, 256, 12];

for ( var n=0; n<number.length; n++) {
  counter = 0;

for (var i = 2; i < number[i]; i++) {  
  if (number[n] % i == 0) {
    counter++;
  }
}
if (counter == 0) {
  console.log(number[n] + "is prime number");
} else {
  console.log(number[n] + "is not prime number");
}

}