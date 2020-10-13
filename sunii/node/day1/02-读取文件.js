// 浏览器中js是没有文件操作能力
// 但是Node中js具有文件操作的能力

// fs是file-system的简写，是文件系统的意思
// 在node中如果想要进行文件操作，就必须引入fs这个核心模块
// 在fs这个核心模块中，就提供了所有文件操作相关的API

// 1. 使用require方法加载fs核心模块
let fs = require('fs');

// 2. 读取文件
// 参数一： 要读取的文件路径
// 参数二： 回调函数，
//          成功
//              data 数据
//              error null
//          失败
//              data undefined 没有数据
//              error 错误对象
fs.readFile('./txt/readfile.txt', function(error, data){
    // 输出： <Buffer 61 73 64 61 73 64>
    // 文件中存储的其实是二进制数据 0 1
    // 这里为什么不是0和1,是因为这里转成了16进制
    // 可以通过toString方法将其转为熟悉的字符

    if(error){
        console.log('读取失败');
    }else{
        console.log(data);
        console.log(data.toString());
    }
})