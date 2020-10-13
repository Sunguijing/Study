// 使用node构建一个web服务器
// 在Node中专门提供了一个核心模块: http
// http这个模块的职责是创建编写服务器

// 1. 加载http核心模块
let http = require('http');

// 2. 使用http.createServer()方法创建一个web服务器
// 返回一个server实例
let server = http.createServer();

// 3. 服务器功能
// 提供数据的服务
// 发请求, 接收请求，处理请求，给反馈
// 当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数，回调处理
server.on('request', function(){
    console.log('收到客户端的请求');
})

// 4. 绑定端口号，启动服务器
server.listen(8080, function(){
    console.log('启动：http://127.0.0.1:8080')
})