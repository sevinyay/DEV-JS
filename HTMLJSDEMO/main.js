import { hello } from "./module1.js";
import { sub, add, evenOrOdd } from "./module2.js";
hello("Sevin Demirbas yay");
let result = add(10, 20);
console.log(result);
let subResult = sub(100, 10);
console.log(subResult);
let resultEvenOrOdd = evenOrOdd(18);
console.log(resultEvenOrOdd);

//import { num, hello } from "./module1.js";

//console.log("value is " + num);
//hello("sevin");
//hello3("hello js world");

// npm init:
// npm: node package manager : env for node.
// init: it will help us to create the nodejs based project structure.
