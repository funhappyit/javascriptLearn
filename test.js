//호출 스택
function d() {
  console.log("d");
}

function e() {
  console.log("e");
}

function a() {
  function b() {
    function c() {
      console.log("c");
    }
    c();
    console.log("b");
  }
  b();
  console.log("a");
}

d();
e();
a();

//재귀함수로 실행시 호출스택에서 에러 발생 -> Maximum call stack exceeded 에러

//해결 방안 비동기로 호출 스택을 비워준다.
//a가 실행돼면 setTimeout이 실행 이렇게 하면 call stack이 터지는것을 막을 수 있다.
//호출 스택이 터지는 현상을 막음

function a() {
  setTimeout(function () {
    a();
  }, 0);
}
a();
