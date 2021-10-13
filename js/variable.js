// 1. use strict
// added in ES 5
// use this for Vaila Javascript
"use strict";

// 2. Variable, rw(read/write) 메모리에서 읽고 쓰기가 가능
// let (added in ES6)
let globalName = "global name";
{
  let name = "heekyung";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever us this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

//  3. Constant, r(read only) 메모리에서 읽기만 가능
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze()) 변경불가능
// Mutable data types: all objects by default are mutable in JS. 변경가능
// favor immutable data type always for a few reasons;
// -security
// -thread safety
// -reduce human mistakes

// 4. Variable types (primitive타입인지, object 타입인지에 따라 메모리에 다른 방식으로 저장된다.)
// primitive, single item: number. string, boolean, null, undefined, symbol
// primmitive 타입은 value로 값이 메모리에 저장된다. 그래서 변경 불가능
// object, box container
// object는 메모리가 너무 커서 한번에 다 올라갈 수가 없다. object를 가리키는 reference가 저장된다. reference는 실제로 object가 담겨있는 메모리를 가리킨다.
// 그래서 const heeekyung이라고 선언하면, heekyung을 가리키는 포인터만 잠겨서 heekyung이 다른 object로 변경이 불가하지만, heekyung의 나이와, 사는 곳은 변경 가능
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value:${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
