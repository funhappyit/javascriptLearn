//클릭을 해야하기 때문에 선택
var 스크린 = document.querySelector("#screen");
var 상태 = {};
//시간 체크 버그 잡기
//console.time("시간");
// var 시작시간 = performance.now();
//예약어는 변수명으로는 못 쓴다.
//호출 스택으로 문제가 생길경우 변수를 이런식으로 빼면 됀다.
var 시작시간;
var 끝시간;
var 기록 = [];
var 타임아웃;
스크린.addEventListener("click", function () {
  //console.timeEnd("끝시간");
  //console.log("시간" + (끝시간 - 시작시간) / 1000);
  //var 끝시간 = performance.now();
  //classList.contains로 현재 클래스 파악 가능

  //비동기는 실행후 튀어 나간다.
  if (스크린.classList.contains("waiting")) {
    //현재 준비 상태인지 파악 가능
    스크린.classList.remove("waiting");
    스크린.classList.add("ready");
    스크린.textContent = "초록색이 되면 클릭하세요.";
    타임아웃 = setTimeout(function () {
      스크린.click();
    }, Math.floor(Math.random() * 1000) + 2000); // 2000~3000사이의 수
  } else if (스크린.classList.contains("ready")) {
    if (!시작시간) {
      clearTimeout(타임아웃);
      스크린.classList.remove("ready");
      스크린.classList.add("waiting");
      스크린.textContent = "너무 성급하시군요!!";
    } else {
      스크린.classList.remove("ready");
      스크린.classList.add("now");
      스크린.textContent = "클릭하세요!!";
    }
    시작시간 = new Date();
  } else if (스크린.classList.contains("now")) {
    끝시간 = new Date();
    console.log("끝시간" + 끝시간);
    //함수가 끝나서 시작시간 정보가 사라져버린다.

    console.log("시작시간" + 시작시간);

    console.log("반응속도", 끝시간 - 시작시간);
    시작시간 = null;
    끝시간 = null;
    기록.push(끝시간 - 시작시간);
    스크린.classList.remove("now");
    스크린.classList.add("waiting");
    스크린.textContent = "클릭해서 시작하세요";
  }
});
