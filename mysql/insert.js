var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'test'
})
connection.connect()
var  addSql = 'INSERT INTO website(Id,name) VALUES(0,?)';
var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com'];
connection.query(addSql, addSqlParams, function (error, results) {
  if (error) throw error;
  console.log('INSERT ID:',results);
});

connection.end();