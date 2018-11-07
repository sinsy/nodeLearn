var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test'
})
connection.connect()
var  addSql = 'delete from website WHERE Id = ?';
var  addSqlParams = [1];
connection.query(addSql, addSqlParams, function (error, results) {
  if (error) throw error;
  console.log('DELETE affectedRows',results.affectedRows);
});

connection.end();