let http = reuqire('http');
let fs = reuqire('fs');

let server = http.createServer();
let wwwDir = 'D:/Movie/www';

// 一个请求对应一个响应，如果在一个请求的过程中，已经结束了，则不能重复发送响应，没有请求就没有响应
server.on('request', function(req, res){
    let url = req.url;
    let filePath = '/index.html';
    if(url !== '/'){
        filePath = url;
    }
    fs.readFile(wwwDir + filePath, function(){
        if(err){
            return res.end('404 Not Found.');
        }
        res.end(data);
    })
})

server.listen(8000, function(){
    console.log('running: 127.0.0.1');
})