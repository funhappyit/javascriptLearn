var 상대영웅 = document.getElementById("rival-hero");
var 내영웅 = document.getElementById("my-hero");
var 상대덱 = document.getElementById("rival-deck");
var 내덱 = document.getElementById("my-deck");
var 상대덱data = [];
var 내덱data = [];
var 상대영웅data;
var 내영웅data;
//중복돼는 부분 합치기
function 카드돔연결(데이터, 돔, 영웅) {
  var 카드 = document.querySelector(".card-hidden .card").cloneNode(true);
  카드.querySelector(".card-cost").textContent = 데이터.cost;
  카드.querySelector(".card-att").textContent = 데이터.att;
  카드.querySelector(".card-hp").textContent = 데이터.hp;
  if (영웅) {
    카드.querySelector(".card-cost").style.display = "none";
    var 이름 = document.createElement("div");
  }
  돔.appendChild(카드);
}

function 상대덱생성(개수) {
  for (var i = 0; i < 개수; i++) {
    상대덱data.push(카드공장());
  }
  상대덱data.forEach(function (data) {
    카드돔연결(data, 상대덱);
  });
}
function 내덱생성(개수) {
  for (var i = 0; i < 개수; i++) {
    내덱data.push(카드공장());
  }
  내덱data.forEach(function (data) {
    카드돔연결(data, 내덱);
  });
}
function 내영웅생성() {
  내영웅data = 카드공장(true);
  카드돔연결(내영웅data, 내영웅, true);
}
function 상대영웅생성() {
  상대영웅data = 카드공장(true);
  카드돔연결(상대영웅data, 상대영웅, true);
}
function 초기셋팅() {
  상대덱생성(5);
  내덱생성(5);
  내영웅생성();
  상대영웅생성();
}

function Card(영웅) {
  if (영웅) {
    this.att = Math.ceil(Math.random() * 2);
    this.hp = Math.ceil(Math.random() * 5) + 25;
    this.hero = true;
  } else {
    this.att = Math.ceil(Math.random() * 5);
    this.hp = Math.ceil(Math.random() * 5);
    this.cost = Math.floor((this.att + this.hp) / 2);
  }
}
// 조금씩 다른 객체들을 찍어내기 위해서 팩토리 패턴을 사용한다.
function 카드공장(영웅) {
  return new Card(영웅);
}
초기셋팅();
