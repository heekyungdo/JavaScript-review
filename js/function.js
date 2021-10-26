// Function //
// - fundamental building block in the program
// - subprogram, can be used multiple times
// - performs a task or calculates a value

// Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. crateCardAndPoint -> createCard, createPoint
// function is object in JS 그렇기 때문에
// function을 변수에 할당할 수도 있고, 파라미터로 전달이 되고, 함수를 리턴할 수 있게 된다.

function printHello() {
  console.log("Hello");
}
printHello(); // Hello
printHello("hi"); // Hello

function easyFunc(very) {
  console.log(very);
}
easyFunc("good"); // good

// 2. Parameters //
// premitive parameters: passed by value. 메모리에 value가 저장되어 있기 때문에 value가 전달된다.
// object parameters: passed by reference. reference가 전달된다.
function changeName(obj) {
  obj.name = "coder";
}
const sexyClara = { name: "clara" };
changeName(clara);
console.log(sexyClara); // {name: 'clara'}
console.log(changeName); // ƒ changeName(obj) { obj.name = "coder"; }
changeName(sexyClara);
console.log(sexyClara); // {name: 'coder'}
console.log(changeName); // ƒ changeName(obj) { obj.name = "coder"; }

// 3. Default parameters (added in ES6) //
function showMessage1(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage1("How are you?"); // How are you? by undefined
showMessage1("How are you?", "Jenny"); // How are you? by Jenny

//parameter 옆에 원하는 default값(unknown)을 지정해 넣으면 사용자가 parameter를 전달하지 않을 때 default값이 대체되어 전달된다.
function showMessage2(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage2("How are you?"); // How are you? by unknown

// 4. Rest parameters (added in ES6) //
//  ... ~ -> ...은 배열형식으로 전달
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));
}
printAll("Hello", "Hi", "guys");
// Hello
// Hi
// guys
// Hello
// Hi
// guys

// 5. Local scope //

// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
// global variable
let globalMessage = "global";
function printMessage() {
  // local variable
  let message = "great";
  console.log(message); // great
  console.log(globalMessage); // global
}
printMessage();
// console.log(message); // local variable이기 때문에 밖에서 호출하면 에러발생
console.log(globalMessage); // global

// 함수 내에서 함수 선언 가능
// 자식(function showAnother)은 부모에게서 정의된 메시지(local)들을 확인할 수 있다.
// 하지만, 자식 안에 정의된 메시지(childMessage)를 부모 위에서 보려고 하면 에러 발생
let showGlobal = "world";
function showLocal() {
  let local = "nice";
  console.log(local); // nice
  console.log(showGlobal); // world
  function showAnother() {
    console.log(local); // nice
    let childMessage = "awesome";
    console.log(childMessage); // awesome
  }
  showAnother();
  // console.log(childMessage); // 에러 발생 -> 부모 위에 있기 때문에
  // return undefined; // return이 들어가 있지 않은 함수는 return undefined된거랑 같다.
}
showLocal();
// showAnother(); // 밖에서 호출 안됨

// 6. Return a value
// parameters로 값을 전달받아서 계산된 값을 return한다.
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`); // sum: 3
console.log(result); // 3

// 7. Early return, early exit
// bad
// ~ 일 때에 이렇게 한다라고 작성하게 되면,
// 블럭 안에서 logic을 많이 작성하면 가독성 떨어진다.
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  } else {
  }
}

// good
// 조건이 맞지 않을 때는 빨리 return을 해서 종료
// 조건이 맞을 때는 필요한 logic들을 실행하는 것이 좋다.
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

//.filter에 대한 설명
// sexyFilter함수는 반드시 true를 리턴해야해.
// 만약 새 array에도 이 1,2,3,4를 포함하고 싶으면, faulse를 리턴하면 그 item은 새 array에 포함되지 않아
// function sexyFilter() {
// console.log("I'm rich");
// }
// filter는 sexyFilter에 1,2,3,4,5를 넣어서 부를거야.
// sexyFilter를 5번 부르는건데, 부를 때 마다 매번 숫자는 달라진다(1,2,3,4,5).
// [1, 2, 3, 4, 5].filter(sexyFilter);

// 만약 3번째 단계에서 false를 리턴하면, js는 1,2,4,5만 유지할거야.
// sexyFilter(1); //true를 리턴하면 js는 1을 유지할거야.
// sexyFilter(2); //true를 리턴하면 js는 2를 유지할거야.
// sexyFilter(3); //true를 리턴하면 js는 3을 유지할거야.
// sexyFilter(4); //true를 리턴하면 js는 4를 유지할거야.
// sexyFilter(5); //true를 리턴하면 js는 5를 유지할거야.

// function sexyFilter() {
// return true;
// }
// [1, 2, 3, 4, 5].filter(sexyFilter); // (5) [1, 2, 3, 4, 5]

// function sexyFilter() {
// return false;
// }
// [1, 2, 3, 4, 5].filter(sexyFilter); // []

// sexyFilter는 item이 3이 아니면 true를 리턴해야돼.
// item을 저장할 공간을 만들어야해 => item 써준 곳임.
// item이 3이 아니면 true를 리턴해
function sexyFilter(item) {
  return item !== 3;
}
[1, 2, 3, 4, 5].filter(sexyFilter); //(4) [1, 2, 4, 5]
//어떻게 계산할까?
// return 1 !== 3 은 true => 그래서 1은 그대로 있어
// return 2 !== 3 은 true => 그래서 2는 그대로 있어
// return 3 !== 3 은 false => 그래서 3은 유지되지 않아
// return 4 !== 3 은 true => 그래서 4는 그대로 있어
// return 5 !== 3 은 true => 그래서 5는 그대로 있어

// filter 예시
const arr = ["piano", "trumpet", "percussion"]; // undefined
function hotFilter(inst) {
  return inst !== "trumpet";
} // undefined
arr.filter(hotFilter); // (2) ['piano', 'percussion']

//배열에서 1000보다 큰 수를 지워보자.
const arrNum = [1234, 5454, 223, 122, 45, 6775, 334]; // undefined
function niceFilter(num) {
  return num <= 1000;
} // undefined
arrNum.filter(niceFilter); // (3) [223, 122, 45, 334]

const todos = [{ text: "lalala" }, { text: "lololo" }]; // undefined
function sexyFilter(todo) {
  return todo.text !== "lololo";
} // undefined
todos.filter(sexyFilter); // [text: "lalala"]
