// function sum(a, b, c) {
//   console.log(a, b, c);
//   console.log((a * b) / c);
// }
// sum(30, 20, 5);

const circle = document.querySelector("#circle");

function change(color) {
  // 색깔을 변경하는 코드
  //   console.log(color);
  circle.style.background = color;
}
// change("red");
// change("yellow");
// change("blue");
// change("green");

// 함수를 제작
// circle의 색깔을 넘겨받은 값으로
// 바꿔주는 함수 제작

// 함수이름 = write
// 넘겨받은 값으로 circle안에 글자를 입력해주는 함수

// circle.innerText = 안녕하세요

function write(취미, color, 이름) {
  circle.innerText = `제이름은 ${이름}이고 취미는 ${취미}입니다.`;
  circle.style.background = color;
}

write("게임이나 영화보기", "아무말대잔치", "nonche");
