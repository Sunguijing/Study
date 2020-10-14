let http = require('http');

// 1. 创建 Serve
let server = http.createServer();
// 2. 监听 request请求事件，设置请求处理函数
server.on('request', function(req, res){
    console.log('收到请求了，请求路径是：' + req.url);
    // res.end('hello world~');

    // 根据不同的请求路径发送不同的响应结果
    // 1. 获取请求路径
    //    req.url 获取的是端口号之后的那一部分路径
    // 2. 判断路径处理响应
    let url = req.url;
    if(url === '/'){
        res.end('index page');
    } else if(url === '/login'){
        res.end('login page');
    } else if(url === '/projects'){
        let projects = [
            {
                name: '苹果',
                price: 888
            },
            {
                name: '香蕉',
                price: 999
            }
        ]
        // 响应的内容只能是二进制数据或者字符串
        res.end(JSON.stringify(projects));
    } else {
        res.end('404 Not Found');
    }

})
// 3. 绑定端口号，启动服务
server.listen(8082, function(){
    console.log('服务器启动成功！');
})