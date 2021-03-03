(function () {
  //증조 할머니
  function great_grandMother() {
    this.eyes = "노란색 눈";
  }
  //할머니
  function grandMother() {
    this.height = "170";
  }
  grandMother.prototype = new great_grandMother();

  //엄마
  function mother() {
    this.face = "이쁨";
  }
  mother.prototype = new grandMother();

  // 나
  function me() {
    this.age = "18";
  }
  me.prototype = new mother();

  // 내가 태어났다.
  var iam = new me();
})();
