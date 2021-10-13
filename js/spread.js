let doingGood = [
  {
    number: "No.1",
    img: "img/1.jpg",
  },
  {
    number: "No.2",
    img: "img/2.jpg",
  },
  {
    number: "No.3",
    img: "img/3.jpg",
  },
  {
    number: "No.4",
    img: "img/4.jpg",
  },
  {
    number: "No.5",
    img: "img/5.jpg",
  },
];

const practice = document.querySelector(".practice");

let h = [];

for (let ok of doingGood) {
  h.push(
    ` <div class="div">
        <h1>${ok.number}</h1>
        <img src="${ok.img}" />
      </div>`
  );
}

// 배열의 원소들을 연결하여 하나의 값으로 만든다.
// 원소의 구분은 콤마로 한다. 다른 문자로 바꾸려면 ()안에 원하는 문자 넣기.
practice.innerHTML = h.join("");

let userList = [
  { name: "heekyung", gender: "F", company: "Google" },
  { name: "Lelia", gender: "F", company: "Kakao" },
  { name: "Tabber", gender: "M", company: "Samsung" },
  { name: "Nick", gender: "M", company: "LG" },
];

function doSearch() {
  var gender = document.getElementById("sel_gender").value;
  console.log(gender);
  // * 배열의 형태로 담는 이유 : 퍼포먼스적으로(성능적으로) 배열의 형태로 담는 것이 좋다. 좀 더 직관적으로 그릴 수도 있음.
  var h = [];
  for (var user of userList) {
    // if (gender == user.gender) {
    h.push("<tr>");
    h.push("<td>" + user.name + "</td>");
    h.push("<td>" + user.gender + "</td>");
    h.push("<td>" + user.company + "</td>");
    h.push("</tr>");
    // }
  }
  document.getElementById("tb").innerHTML = h.join("");
}

doSearch();
