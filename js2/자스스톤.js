var 상대 = {
  영웅: document.getElementById("rival-hero"),
  덱: document.getElementById("rival-deck"),
  필드: document.getElementById("rival-cards"),
  코스트: document.getElementById("rival-cost"),
  덱data: [],
  영웅data: [],
  필드data: [],
};

var 내 = {
  영웅: document.getElementById("my-hero"),
  덱: document.getElementById("my-deck"),
  필드: document.getElementById("my-cards"),
  코스트: document.getElementById("my-cost"),
  덱data: [],
  영웅data: [],
  필드data: [],
};

var 턴버튼 = document.getElementById("turn-btn");
var 턴 = true;
//중복돼는 부분 합치기
function 덱에서필드로(데이터, 내턴) {
  var 객체 = 내턴 ? 내 : 상대; //조건? 참: 거짓
  var 현재코스트 = Number(객체.코스트.textContent);
  if (현재코스트 < 데이터.cost) {
    return "end";
  }
  var idx = 객체.덱data.indexOf(데이터);
  객체.덱data.splice(idx, 1);
  객체.필드data.push(데이터);
  객체.덱.innerHTML = "";
  객체.필드.innerHTML = "";
  객체.필드data.forEach(function (data) {
    카드돔연결(data, 객체.필드);
  });
  객체.덱data.forEach(function (data) {
    카드돔연결(data, 객체.덱);
  });
  데이터.field = true;
  객체.코스트.textContent = 현재코스트 - 데이터.cost;
}

function 카드돔연결(데이터, 돔, 영웅) {
  var 카드 = document.querySelector(".card-hidden .card").cloneNode(true);
  카드.querySelector(".card-cost").textContent = 데이터.cost;
  카드.querySelector(".card-att").textContent = 데이터.att;
  카드.querySelector(".card-hp").textContent = 데이터.hp;

  if (영웅) {
    카드.querySelector(".card-cost").style.display = "none";
    var 이름 = document.createElement("div");
    카드.appendChild(이름);
  }
  카드.addEventListener("click", function (card) {
    if (턴) {
      if (!데이터.mine || 데이터.field) {
        //상대 카드거나 카드가 필드에 있으면
        //상대카드면
        return;
      }
      if (덱에서필드로(데이터, true) !== "end") {
        내덱생성(1);
      }
    } else {
      //상대 텀인데
      if (데이터.mine || 데이터.field) {
        //내카드거나 카드가 필드에 있으면
        return;
      }
      if (덱에서필드로(데이터, false) !== "end") {
        상대덱생성(1);
      }
    }
  });
  돔.appendChild(카드);
}

function 상대덱생성(개수) {
  for (var i = 0; i < 개수; i++) {
    상대.덱data.push(카드공장(false, false));
  }
  상대.덱.innerHTML = "";
  상대.덱data.forEach(function (data) {
    카드돔연결(data, 상대.덱);
  });
}
function 내덱생성(개수) {
  for (var i = 0; i < 개수; i++) {
    내.덱data.push(카드공장(false, true));
  }
  내.덱.innerHTML = "";
  내.덱data.forEach(function (data) {
    카드돔연결(data, 내.덱);
  });
}
function 내영웅생성() {
  내.영웅data = 카드공장(true, true);
  카드돔연결(내.영웅data, 내.영웅, true);
}
function 상대영웅생성() {
  상대.영웅data = 카드공장(true, false);
  카드돔연결(상대.영웅data, 상대.영웅, true);
}
function 초기셋팅() {
  상대덱생성(5);
  내덱생성(5);
  내영웅생성();
  상대영웅생성();
}

function Card(영웅, 내카드) {
  if (영웅) {
    this.att = Math.ceil(Math.random() * 2);
    this.hp = Math.ceil(Math.random() * 5) + 25;
    this.hero = true;
    this.field = true;
  } else {
    this.att = Math.ceil(Math.random() * 5);
    this.hp = Math.ceil(Math.random() * 5);
    this.cost = Math.floor((this.att + this.hp) / 2);
  }
  if (내카드) {
    this.mine = true;
  }
}
// 조금씩 다른 객체들을 찍어내기 위해서 팩토리 패턴을 사용한다.
function 카드공장(영웅, 내카드) {
  return new Card(영웅, 내카드);
}
초기셋팅();
//턴 클릭 후 턴 넘기기
턴버튼.addEventListener("click", function () {
  턴 = !턴; // a = !a는 true => false, false => true
  if (턴) {
    나.코스트.textContent = 10;
  } else {
    상대.코스트.textContent = 10;
  }

  document.getElementById("rival").classList.toggle("turn");
  document.getElementById("my").classList.toggle("turn");
});
