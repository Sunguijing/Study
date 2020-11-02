let http = require('http');
let fs = require('fs');
let template = require('art-template');

let server = http.createServer();
let wwwDir = 'C:/github/DataStructureAndAlgorithm-Study/sunii/node/day2/www';

// 一个请求对应一个响应，如果在一个请求的过程中，已经结束了，则不能重复发送响应，没有请求就没有响应
server.on('request', function(req, res){
    let url = req.url;
    let filePath = '/index.html';
    if(url !== '/'){
        filePath = url;
    }
    fs.readFile('www/index.html', function(err, data){
        if(err){
            return res.end('404 Not Found.');
        }
        // 1. 如何得到wwwDir目录列表中的文件名和目录名fs.readdir
        fs.readdir(wwwDir, function(err, files){
            if(err){
                return res.end('找不到目录');
            }
            
            let htmlStr = template.render(data.toString(), function(){
                
            })
            
            res.end(data);
        })
    })
})

server.listen(8001, function(){
    console.log('running: 127.0.0.1:8001');
})