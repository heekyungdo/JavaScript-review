var d = new Date(); //현재 날짜/시간
console.log(d);

// console.log(moment().format("YYYY-MM-DD"));
// console.log(moment().format("MMM DD, YYYY"));

// console.log(moment().subtract(7, "days").format("YYYY-MM-DD"));
// console.log(moment().add(7, "days").format("YYYY-MM-DD"));
// console.log(moment().add(4, "hours").format("YYYY-MM-DD HH"));

console.log("timezone", d.getTimezoneOffset()); // 분단위
//-540 = -9시간 * -1

for (let i = 0; i < 11; i++) {
  console.log(i);
  continue;
}

var year = d.getFullYear();
var utcYear = d.getUTCFullYear();
console.log("year", year);
console.log("utcYear", utcYear);

var month = d.getMonth() + 1;
var utcMonth = d.getUTCMonth();
console.log("month", month);

var date = d.getDate();
console.log("date", date);

var day = d.getDay();
console.log("day", day);
//일요일 - 0
//월요일 - 1
//화요일 - 2
//수요일 - 3

var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
console.log(hour);
console.log(minute);
console.log(second);

var d = new Date();
//타임존
//2021.03.30 12:23:33 => 2021.03.30 03:23:33
//글제목, 작성자, 작성일 : 2021.03.30 12:23:33
//2021.03.30 03:24:33

//

//

//Tue Mar 30 2021 13:41:14 GMT+0900

//month 월인경우는 1월 - 0
//day 일자인경우는 1 - 1
var d = new Date(2021, 3, 27, 11, 14, 23);
console.log(d);

//2021-03-21, 2021.03.21
//월 일 년도 - Mar 21, 2021
var month_en = ["Jan", "Feb", "Mar"];
console.log(month_en);

//3월인경우 - 2,
var mon = 0;
console.log(month_en[mon]);
