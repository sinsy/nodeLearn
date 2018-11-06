var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
  console.log('主页Get请求');
  res.send('hello get')
})

//  POST 请求
app.post('/', function (req, res) {
  console.log("主页 POST 请求");
  res.send('Hello POST');
})

app.get('/del_user', function (req, res) {
  console.log('del_user 请求');
  res.send('删除页面')
})
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})