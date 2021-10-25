// 1. String Concatenation //
console.log("my" + " cat"); // my cat
console.log("1" + 2); // 12
console.log(`string literals:1+2=${1 + 2}`); // string literals:1+2=3

// \n 줄바꿈
// \t 탭키
console.log("heekyung's \n\tbook"); // heekyung's
//                                          book

// 2. Numeric operators //
//add
console.log(1 + 1); // 2
//substract
console.log(1 - 1); // 0
//divide
console.log(1 / 1); // 1
//multiply
console.log(1 * 1); // 1
//remainder
console.log(5 % 2); // 1
//exponentiation
console.log(2 ** 3); // 8

// 3. Increment and decrement operators //
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // preIncrement: 3, counter: 3
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // postIncrement: 3, counter: 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // preDecrement: 3, counter: 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // postDecrement: 3, counter: 2

// 4. Assignment operators //
let x = 3;
let y = 6;
x += y; // 9
x -= y; // -3
x *= y; // 18
x /= y; // 2

// 5. Comparison operators //
// less than
console.log(10 < 6); // false
// less than or equal
console.log(10 <= 6); // false
// greater than
console.log(10 > 6); // true
// greater than or equal
console.log(10 >= 6); // true

// 6. Logical operators:  || (or), && (and), ! (not) //
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value //
// true가 나오면 거기서 끝. 그 이하는 출력하지 않아. 그래서 만약 value1이 true이면 거기서 끝나기 때문에 😓 얘를 출력하지 않는다.
// 아래코드처럼 무거운 코드 check()를 가장 나중에 사용하는 것이 좋은 코드. 마지못해 나오게 사용. 처음부터 무거우면 힘들어
console.log(`or:${value1 || value2 || check()}`); // or:true

// && (and), finds the first false value //
// false가 하나라도 있으면 무조건 false 출력
console.log(`and:${value1 && value2 && check()}`); // and:false

// often used to compress ong if-statement
// nullableObject && nullableObject.something //object가 null이면 false가 되기 때문에 뒤에가 실행이 안된다. null object가 null이 아닐 때만 sth을 받아오게된다.
// 코드로 작성해보자면,
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😓"); // 😓
  }
  return true;
}

// ! (not) //
console.log(!value1); // true

// 7. Equlity //
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion //
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion //
// 타입이 다르면 false로 출력
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); //true

// object equality by reference //
const clara1 = { name: "clara" };
const clara2 = { name: "clara" };
const clara3 = clara1;
console.log(clara1); // {name: 'clara'}
console.log(clara2); // {name: 'clara'}
console.log(clara3); // {name: 'clara'}
console.log(clara1 == clara2); // false -> reference가 달라
console.log(clara1 === clara2); // false -> reference가 달라
console.log(clara1 == clara3); // true -> clara1이 갖고 있는 reference를 3으로 할당했기 때문에 같아

// equality - puzzler //
console.log(0 == false); // true -> false === 0
console.log(0 === false); // false -> number !== boolean
console.log("" == false); // true ->  empty string은 false
console.log("" === false); // false -> empty string은 !== boolean
console.log(null == undefined); // true
console.log(null === undefined); // false -> different types

// 8. Conditional operators: if //
// if, else, if, else
const name = "Clara";
if (name === "Clara") {
  console.log("Welcome, Clara");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unkwnon");
}

// 9. Ternary operator: ? //
// condition ? value1 : value2;
console.log(name === "Clara" ? "yes" : "no"); // yes

// 10. Switch statement //
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("small all!");
    break;
}

// 11. Loops //
// while loop, while the condition is truthy, //
// body code is executed.
// false가 나오기 전까지는 무한대로 반복한다
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
// while: 3
// while: 2
// while: 1

// do while loop, body code is executed first, //
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);
// do while: 0

// for loop, for(begin; condition; step) //
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}
// for: 3
// for: 2
// for: 1

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}
// inline variable for: 3
// inline variable for: 1

// nested loops // -> CPU에 좋지 않다
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}
// i가 0일 때, j를 0~9까지 돌리고, i가 1일 때 j를 0~9까지 돌린다.
// i: 0, j: 0
// i: 0, j: 1
// i: 0, j: 2
// i: 0, j: 3
// ~~
// i: 9, j: 9

// break : loop를 완전히 끝내는 것 //
// continue : 현재 것만 skip하고 다음으로 넘어가는 것 //
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  // 숫자가 홀수인 경우에는 continue사용해서 skip
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}
// q1. 0
// q1. 2
// q1. 4
// q1. 6
// q1. 8
// q1. 10

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
// q2. 0
// q2. 1
// q2. 2
// q2. 3
// q2. 4
// q2. 5
// q2. 6
// q2. 7
// q2. 8
