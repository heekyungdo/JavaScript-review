//.filter에 대한 설명
// sexyFilter함수는 반드시 true를 리턴해야해.
// 만약 새 array에도 이 1,2,3,4를 포함하고 싶으면, flase를 리턴하면 그 item은 새 array에 포함되지 않아
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
const arr = [1234, 5454, 223, 122, 45, 6775, 334]; // undefined
function niceFilter(num) {
  return num <= 1000;
} // undefined
arr.filter(niceFilter); // (3) [223, 122, 45, 334]

const todos = [{ text: "lalala" }, { text: "lololo" }]; // undefined
function sexyFilter(todo) {
  return todo.text !== "lololo";
} // undefined
todos.filter(sexyFilter); // [text: "lalala"]
