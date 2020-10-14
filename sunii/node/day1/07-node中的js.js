
// 用来获取机器信息
let os = require('os');
// 用来操作路径
let path = require('path');

// 获取当前机器的CPU信息
console.log(os.cpus());

// memory 内存
console.log(os.totalmem());

console.log(path.basename('C:\\temp\\myfile.html'));