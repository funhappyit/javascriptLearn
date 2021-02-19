var 가로 = 4;
var 세로 = 3;
var 색깔후보 = [
  "red",
  "red",
  "orange",
  "orange",
  "green",
  "green",
  "yellow",
  "yellow",
  "white",
  "white",
  "pink",
  "pink",
];
var 색깔 = [];
var 클릭플래그 = true;
for (var i = 0; 색깔후보.length > 0; i += 1) {
  색깔 = 색깔.concat(
    색깔후보.splice(Math.floor(Math.random() * 색깔후보.length), 1)
  );
}
console.log(색깔);

function 카드세팅(가로, 세로) {
  클릭플래그 = false;
  for (var i = 0; i < 가로 * 세로; i += 1) {
    var card = document.createElement("div");
    card.className = "card";
    var cardInner = document.createElement("div");
    cardInner.className = "card-inner";
    var cardFront = document.createElement("div");
    cardFront.className = "card-front";
    var cardBack = document.createElement("div");
    cardBack.className = "card-back";
    cardBack.style.backgroundColor = 색깔[i];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    //클로져 문제 발생
    (function (c) {
      card.addEventListener("click", function () {
        if (클릭플래그) {
          c.classList.toggle("flipped");
        }
      });
    })(card);
    document.body.appendChild(card);
  }
  //유저가 처음 카드를 외울시간을 준다.
  document.querySelectorAll(".card").forEach(function (card, index) {
    setTimeout(function () {
      card.classList.add("flipped");
    }, 1000 + 100 * index);
  });
  //유저에게 외울시간을 주고 닫아버리기
  setTimeout(function () {
    document.querySelectorAll(".card").forEach(function (card, index) {
      card.classList.remove("flipped");
    });
    클릭플래그 = true;
  }, 5000);
}

카드세팅(가로, 세로);
