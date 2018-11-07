const fs = require('fs');
const child_process = require('child_process');

//spawn() 方法返回流 (stdout & stderr)，在进程返回大量数据时使用。进程一旦开始执行时 spawn() 就开始接收响应。
for(var i=0; i<3; i++){
  var worker_process = child_process.fork("support.js", [i]);

  worker_process.on('close', function (code) {
    console.log('子进程已退出，退出码 ' + code);
  });
}
