var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', function (req, res) {
  fs.readFile(__dirname + '/user.json', 'utf8', function (err, data) {
    console.log(data)
    res.end(data)
  })
})
app.get('/addUser', function (req, res) {
  fs.readFile(__dirname + '/user.json', 'utf8', function (err, data) {
    data = JSON.parse(data);
    data['user4'] = {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
    }
    res.end(JSON.stringify(data))
  })
})

app.get('/deleteUser', function (req, res) {

  // First read existing users.
  fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
    data = JSON.parse( data );
    delete data["user2"];

    console.log( data );
    res.end( JSON.stringify(data));
  });
})

//如果在同一个 server.js 里创建多个 RESTful API ， 并且 :id 放在前边， 那么它会拦截其他的请求，
app.get('/:id', function (req, res) {
  fs.readFile(__dirname + '/user.json', 'utf8', function (err, data) {
    data = JSON.parse(data);
    var user = data['user'+req.params.id]
    res.end(JSON.stringify(user))
  })
})


var server = app.listen(8081, '127.0.0.1',function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})