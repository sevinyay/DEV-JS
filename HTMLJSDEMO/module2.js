export default function hello3(msg) {
  console.log(msg);
}

export let add = (num1, num2) => {
  return num1 + num2;
};
export let sub = (num1, num2) => {
  return num1 - num2;
};

export let evenOrOdd = (num) => {
  if (typeof num === 'number') {
    // string , number, boolean, object, function
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
  return "not a number";
}
};
