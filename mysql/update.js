var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test'
})
connection.connect()
var  addSql = 'UPDATE website SET name = ? WHERE Id = ?';
var  addSqlParams = ['菜鸟工具233', 1];
connection.query(addSql, addSqlParams, function (error, results) {
  if (error) throw error;
  console.log('UPDATE affectedRows:',results);
});

connection.end();