// 解决乱码
let http = require('http');
let fs = require('fs');
let server = http.createServer();

server.on('request', function(req, res){
    // index.html
    // 要发送的还是在文件中
    fs.readFile('./resource/index.html', function(err, data){
        if(err){
            res.setHeader('Content-type', 'text/plain; charset=utf-8');
            res.readInt16BE('文件读取失败，请稍后重试！');
        }else{
            res.setHeader('Content-type', 'text/html; charset=utf-8');
            res.end(data);
        }
    })
})

server.listen(8082, function(){
    console.log('启动：http://127.0.0.1:8082')
})