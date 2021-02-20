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
var 클릭카드 = [];
var 완성카드 = [];
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
        if (클릭플래그 && !완성카드.includes(c)) {
          c.classList.toggle("flipped");
          클릭카드.push(c);
          if (클릭카드.length === 2) {
            if (
              클릭카드[0].querySelector(".card-back").style.backgroundColor ===
              클릭카드[1].querySelector(".card-back").style.backgroundColor
            ) {
              완성카드.push(클릭카드[0]);
              완성카드.push(클릭카드[1]);
              클릭카드 = [];
            } else {
              //두 카드의 색깔이 다르면
              setTimeout(function () {
                클릭카드[0].classList.remove("flipped");
                클릭카드[1].classList.remove("flipped");
                클릭플래그 = true;
                클릭카드 = [];
              }, 1000);
            }
          }
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
