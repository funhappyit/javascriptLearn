var 상대영웅 = document.getElementById("rival-hero");
var 내영웅 = document.getElementById("my-hero");
var 상대덱 = document.getElementById("rival-deck");
var 내덱 = document.getElementById("my-deck");
var 상대덱data = [];
var 내덱data = [];
var 상대영웅data;
var 내영웅data;
function 상대덱생성(개수) {
  for (var i = 0; i < 개수; i++) {
    상대덱data.push(카드공장());
  }
}
function 내덱생성(개수) {
  for (var i = 0; i < 개수; i++) {
    내덱data.push(카드공장());
  }
  console.log("내덱data" + 내덱data[0].att + 내덱data[0].hp + 내덱data[0].cost);
}
function 내영웅생성() {
  카드공장();
}
function 상대영웅생성() {
  카드공장();
}
function 초기셋팅() {
  상대덱생성(5);
  내덱생성(5);
  내영웅생성();
  상대영웅생성();
}

function Card() {
  this.att = Math.ceil(Math.random() * 5);
  this.hp = Math.ceil(Math.random() * 5);
  this.cost = Math.floor((this.att + this.hp) / 2);
}
// 조금씩 다른 객체들을 찍어내기 위해서 팩토리 패턴을 사용한다.
function 카드공장() {
  return new Card();
}
초기셋팅();
