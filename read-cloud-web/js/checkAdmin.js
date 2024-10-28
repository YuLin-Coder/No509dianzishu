window.onload = function () {
  var storage = window.sessionStorage;
  // 先将json字符串转化为对象
  var admin = storage.getItem('admin')
  if (admin == null) {
    location.href = '../admin/login.html'
  }
}




// var script = document.createElement("script");
// script.type = "text/javascript";
// script.src = "jquery.min.js";
// document.getElementsByTagName('head')[0].appendChild(script);
// setTimeout(function () {
//   $(document).ready(function () {

//     alert('拼接了一个jQuery，最大加载时间10秒')

//   });
// }, 1000); 