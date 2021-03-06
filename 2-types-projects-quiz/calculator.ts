/**
 * Let's make a calculator ๐งฎ
 */

/**
 * ์ฒซ๋ฒ์งธ ์๋
 */
// const calculate = (name: string, left: number, right: number) => {
//   switch (name) {
//     case "add":
//       return add(left, right);
//     case "substract":
//       return substract(left, right);
//     case "multiply":
//       return multiply(left, right);
//     case "divide":
//       return divide(left, right);
//     case "remainder":
//       return remainder(left, right);
//   }
// };

// const add = (left: number, right: number) => {
//   return left + right;
// };

// const substract = (left: number, right: number) => {
//   return left - right;
// };

// const multiply = (left: number, right: number) => {
//   return left * right;
// };

// const divide = (left: number, right: number) => {
//   return left / right;
// };

// const remainder = (left: number, right: number) => {
//   return left % right;
// };

/**
 * Best Practice
 * 1. type ์ ์ด์ฉํด์ ๋์ด์ค๋ Command ์ธ์๋ฅผ string์ด ์๋๋ผ ์ ํด์ง command๋ก ํ์ ์ง์ 
 * 2. ๋ฐ๋ก ํจ์๋ก ์ฐ๊ฒฐ ์ํ๊ณ  ๊ฐ๋จํ๊ฒ return
 * 3. default ์์๋ ์๋ฌ ํธ๋ค๋ง
 */
type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

const calculate = (command: Command, a: number, b: number) => {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    default:
      throw Error("์ ์ ์๋ ์ปค๋งจ๋์ผ.");
  }
};

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
