//클릭을 해야하기 때문에 선택
var 스크린 = document.querySelector("#screen");
var 상태 = {};

스크린.addEventListener("click", function () {
  //classList.contains로 현재 클래스 파악 가능
  if (스크린.classList.contains("waiting")) {
    //현재 준비 상태인지 파악 가능
    스크린.classList.remove("waiting");
    스크린.classList.add("ready");
    스크린.textContent = "초록색이 되면 클릭하세요.";
  } else if (스크린.classList.contains("ready")) {
    스크린.classList.remove("ready");
    스크린.classList.add("now");
    스크린.textContent = "클릭하세요!!";
  } else if (스크린.classList.contains("now")) {
    스크린.classList.remove("now");
    스크린.classList.add("waiting");
    스크린.textContent = "클릭해서 시작하세요";
  }
});
