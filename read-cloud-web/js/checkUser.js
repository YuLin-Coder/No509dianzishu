window.onload = function () {
  var storage = window.sessionStorage;
  // 先将json字符串转化为对象
  var user = JSON.parse(storage.getItem('user'))
  if (user == null) {
    location.href = '../user/login.html'
  }
}
