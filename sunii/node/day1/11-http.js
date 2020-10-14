// 解决乱码
let http = require('http');
let server = http.createServer();

server.on('request', function(req, res){
    // 在服务器默认发送的数据，其实是Utf-8编码的内容
    // 但是浏览器不知道你是utf8编码的内容，
    // 浏览器在不知道服务器响应内容编码的情况下会按照当前操作系统的默认编码去解析内容

    // 解决方法
    // 在http协议中，Content-Type就是告知对方发送数据是什么类型
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('你好，世界！');

    let url = req.url;
    if(url === '/plain'){
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    } else if(url === '/html'){
        // text/plain 就是普通文本
        // 如果发送的是html格式的字符串，也要告诉浏览器发送的类型
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<p>hello world!<a href="">点我</a><p>')
    }
})

server.listen(9090, function(){
    console.log('启动：http://127.0.0.1:9090')
})