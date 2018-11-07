var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test'
})
connection.connect()
connection.query('SELECT * FROM website', function (error, results) {
  if (error) throw error;
  console.log(results)
});

connection.end();