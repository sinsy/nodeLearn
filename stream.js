var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk){
    data += chunk;
})

readerStream.on('end', function () {
    console.log(data)
})

readerStream.on('error', function (err) {
    conosle.log(err.stack)
})

console.log('读取数据流执行完毕')

var writeData = 'test'
var writeStream = fs.createWriteStream('output.txt')
writeStream.write(writeData, 'utf8')
writeStream.end();
writeStream.on('finish', function(){
    console.log('写入完成')
})
writeStream.on('error', function () {
  console.log(err.stack)
})
console.log('写入数据流执行完毕')

var writePipeStream = fs.createWriteStream('pipe.txt')
readerStream.pipe(writePipeStream)
console.log('管道流执行完毕')