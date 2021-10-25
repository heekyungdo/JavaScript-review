// 1. use strict //
// added in ES 5
// use this for Vaila Javascript
// use strict를 사용하지 않고, 선언되지 않은 값을 할당하면, 브라우저에서는 전혀 문제가 되지 않는다.
// use strcit를 사용하게 되면, 선언되지 않은 값을 할당하면, 정의되지 않다는 에러가 뜬다.
"use strict";

// 2. Variable (변경될 수 있는 값). rw(read/write) 메모리에서 읽고 쓰기가 가능 //

// let (added in ES6). Mutable data type

// global scope : 어느 곳에서나 접근 가능
// global한 변수들은 application이 실행될 때부터 끝날 때까지 항상 메모리에 탑재되어 있기 때문에 최소한으로 사용하는 것이 좋다.
// 가능하면 class, if, 함수, for loop 필요한 부분에서만 정의해서 쓰는 것이 좋다.
let globalName = "global name";
{
  //block scope : 블록 밖에서는 블록 안의 내용을 볼 수 없다.
  let name = "heekyung";
  console.log(name); // heekyung
  name = "hello";
  console.log(name); // hello
  console.log(globalName); //global name
}
console.log(name);
console.log(globalName); //global name

// var (don't ever us this!)
// var hoisting (move declaration from bottom to top)
// var has no block scope
{
  age = 4;
  var age;
}
console.log(age); // 4

//  3. Constants, r(read only) 메모리에서 읽기만 가능 //
// Immutable data type
// 한번 할당하면 값이 절대 바뀌지 않는다.
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note! //
// Immutable data types: primitive types, frozen objects (i.e. object.freeze()) 변경불가능
// Mutable data types: all objects by default are mutable in JS. 변경가능
// favor immutable data type always for a few reasons;
// -security
// -thread safety
// -reduce human mistakes

// 4. Variable types (primitive타입인지, object 타입인지에 따라 메모리에 다른 방식으로 저장된다.) //
// 1) primitive, single item: number. string, boolean, null, undefined, symbol (더 이상 작은 단위로 나눠질 수 없는, 한 가지의 아이템을 말한다.)
// primitive 타입은  value로 값이 메모리에 저장된다. 그래서 변경 불가능
// 2) object, box container (single item들을 여러개 묶어서 한 단위, 한 박스로 관리하게 해주는 것 )
// object는 메모리가 너무 커서 한번에 다 올라갈 수가 없다. 그렇기 때문에 object를 가리키는 reference가 저장된다. reference는 실제로 object가 담겨있는 메모리를 가리킨다.
// 그래서 const heeekyung이라고 선언하면, heekyung을 가리키는 포인터만 잠겨서 heekyung이 다른 object로 변경이 불가하지만, heekyung의 나이와, 사는 곳은 변경 가능
// 3) function, first-class function : 이 프로그래밍 언어에서는 function도 다른 데이터 타입처럼 변수에 할당이 가능하고, 그렇기 때문에 함수의 파라미터 인자로도 전달되고, 함수에서 return타입으로도 funtion을 return할 수 있는 것이 가능하다.

// number //
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value:${count}, type: ${typeof count}`); // value:17, type: number

console.log(`value: ${size}, type: ${typeof size}`); // value: 17.1, type: number

// number - special numeric values : infinity, -infinity, NaN //
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigInt (fairly new, don't use it yet) //
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53 ~ 2*53)까지의 표현만 가능했었다. //숫자 마지막에 n만 붙이면 bigInt로 간주되어진다.
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); // value: 1234567890123456789012345678901234567890, type: bigint

// string //
const char = "c";
const clara = "clara";
const greeting = "hello" + " " + clara;
console.log(char); // c
console.log(clara); // clara
console.log(greeting); // hello clara

// template literals (string) : `string text ${expression} string text`
console.log(`value: ${greeting}, type: ${typeof greeting}`); // value: hello clara, tyle: string
const helloBob = `hi ${clara}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // value: hi clara!, type: string

// boolean //
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`); // value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`); // value: false, type: boolean

// null //
// 텅텅 비어있는 empty 값이야. 너는 아무것도 아니야라고 지정해주는 것
let nothing = null;
console.log(`value: ${nothing}, value:${typeof nothing}`); // value: null, value:object

// undefined //
// 선언되었지만, 값이 들어가 있지 않아
// 텅텅 비었는지, 값이 들어가 있지 않은 건지 아직 정의되어 있지 않은 것
let x;
console.log(`value: ${x}, value:${typeof x}`); // value: undefined, value:undefined

// symbol, create unique identifiers for objects //
// map이나 다른 자료구조에서 고유한 식별자가 필요하거나, 동시에 다발적으로 concurrent하게 일어날 수 있는 코드에서 우선 순위로 주고 싶을 때, 정말 고유한 식별자가 필요할 때 쓰여진다.
// symbol은 동일은 string을 작성했어도 다른 symbol로 만들어주기 때문에 주어진 string에 상관없이 고유한 식별자를 만들어 준다.
// string은 다른 모듈이나 다른 파일에서 동일한 string을 썼을 때 동일한 식별자로 간주된다.

// 아래 예시에서 symbol 같은 경우는 동일한 id를 이용해서 symbol을 만들었지만, 두가지의 symbol은 다른 경우다.
// 이것이 동일한지 안한지 알아보기 위해 아래처럼 console.log로 찍어보았다.
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false

// string이 같고, 동일한 symbol을 만들고 싶을 때는 아래와 같이해.
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
// console.log(`value: ${symbol1}, value:${typeof symbol1}`); // 에러발생
console.log(`value: ${symbol1.description}, value:${typeof symbol1}`); // value: id, value:symbol // .description을 이용해 string으로 변환해서 출력해야한다.

// object, real-life object, data structure //
// clara는 const로 지정되어있어서 한번 지정된 object는 다른 object로 변경이 불가하다.
// const로 정의되있기 때문에 clara가 가리키고 있는 메모리의 포인터는 잠겨있어서 다른 object로 할당이 불가하지만,
// object 안에는 name과 age라는 변수들이 존재하기 때문에 clara.name, clara.age으로 하면
// 각각 포인터가 가리키고 있는 메모리에 다른 값으로 할당이 가능하다.
const clara = { name: "clara", age: 20 };

clara.age = 22;

// 5. Dynamic typing : dynamically typed language //
let text = "hello";
console.log(`value: ${text}, value:${typeof text}`); // value: hello, value:string
text = 1;
console.log(`value: ${text}, value:${typeof text}`); // value: 1, value:number
text = "7" + 5;
console.log(`value: ${text}, value:${typeof text}`); // value: 75, value:string
text = "8" / "2";
console.log(`value: ${text}, value:${typeof text}`); // value: 4, value:number
