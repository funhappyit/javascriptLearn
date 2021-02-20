// 콜백 처리
function logName() {
  // 아래의 user 변수는 위의 코드와 비교하기 위해 일부러 남겨놓았습니다.
  var user = fetchUser("domain.com/users/1", function (user) {
    if (user.id === 1) {
      console.log(user.name);
    }
  });
}
// async & await 적용 후
async function logName() {
  var user = await fetchUser("domain.com/users/1");
  if (user.id === 1) {
    console.log(user.name);
  }
}
async function fetchData() {
  await getUserList(); // Promise객체를 반환하는 API호출 함수 앞에 await
}
