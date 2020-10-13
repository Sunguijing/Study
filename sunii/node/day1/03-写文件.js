let fs = require('fs');

// 写入文件
// 参数1： 文件路径
// 参数2： 文件内容
// 参数3： 回调函数
//     成功：
//          文件写入成功
//          error是Null
//     失败：
//          文件写入失败
//          error就是错误对象
fs.writeFile('./txt/writefile.txt',  '写入的内容', function(error){
    if(error){
        console.log('写入失败');
    }else{
        console.log('写入成功')
    }
});