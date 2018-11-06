var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html");
})
app.get('/process_get', function (req, res) {

  // 输出 JSON 格式
  var response = {
    "first_name":req.query.first_name,
    "last_name":req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

// 创建 application/x-www-form-urlencoded 编码解析
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/process_post',urlencodedParser, function (req, res) {

  // 输出 JSON 格式
  var response = {
    "first_name":req.body.first_name,
    "last_name":req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

//文件上传
var fs = require("fs");
var multer  = require('multer');
app.use(multer({ dest: '/public/uploads/'}).array('image'));
app.post('/file_upload',function (req, res) {
  console.log(req.files[0]);  // 上传的文件信息
  var des_file = __dirname+'/'+req.files[0].destination+'/'+req.files[0].originalname;
  fs.readFile(req.files[0].path, function (err, data) {
    fs.writeFile(des_file, data, function (err) {
      if(err){
        console.log(err)
      }else{
        response = {
          message: 'success',
          filename: req.files[0].originalname,
          url: req.files[0]
        }
        console.log(response);
        res.end(JSON.stringify(response));
      }
    })
  })

})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})