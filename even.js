var a = [10, 20, 30, 40, 50, 60, 77, 87, 99];
var even = 0;

for (let i = 0; i < a.length; i++) {
  let element = a[i];
  even = element % 2;
  if (even == 0) {
    console.log(element + "element is even");
  }
}
