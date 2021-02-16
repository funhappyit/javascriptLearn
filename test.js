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
