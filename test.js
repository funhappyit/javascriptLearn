(function () {
  var superObj = { superVal: "super" };
  // Object.create(superObj)   // superObj를 부모로 하는 새로운 객체 생성
  var subObj = Object.create(superObj); // 새로 생성한 객체를 subObj선언 및 할당
  subObj.subVal = "sub"; // subObj의 속성으로 subVal 추가하고 값을 'sub'로 설정
  console.log("subObj.subVal =>", subObj.subVal); // sub
  console.log("subObj.superVal =>", subObj.superVal); // super
  subObj.superVal = "sub"; // 객체의 프로퍼티가 없으면 추가하고, 있으면 갱신해 준다.
  //그 객체의 원형을 바꾸는 것이 아니다.
  //그 객체의 원형을 바꾸려면, 그 객체의 원형을 가리키는 subObj.__proto__.superVal = 'sub' 와 같은 코드로 작성해야 한다. 하지만 이렇게 사용하지는 않는다.
  console.log("superObj.superVal =>", superObj.superVal); // super
})();
