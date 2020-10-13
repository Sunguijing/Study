// 使用node构建一个web服务器
// 在Node中专门提供了一个核心模块: http
// http这个模块的职责是创建编写服务器

// 1. 加载http核心模块
let http = require('http');

// 2. 使用http.createServer()方法创建一个web服务器
// 返回一个server实例
let server = http.createServer();

// reuqest请求事件处理函数，需要接收两个参数：
    // Request 请求对象
    //      请求对象可以用来获得客户端的一些请求，例如请求路径
    // Response 响应对象
    //      响应对象可以用来给客户端发送响应消息

server.on('request', function(request, response){
    console.log('收到客户端的请求, 请求地址是：', request.url);

    // response 对象有一个方法，write可以用来给客户端发送响应数据
    // write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待
    response.write('hello world');
    response.write('坚持，就会有收获！');
    // 告诉客户端，话说完了，可以浏览器展示了
    response.end();

    // 由于现在服务器能力还很弱，无论是什么请求，都只响应一种
    // 思考：1. 希望不同请求路径响应不同结果
    // 例如：  /index  /login 登录  /register 注册
    
})

// 4. 绑定端口号，启动服务器
server.listen(8081, function(){
    console.log('启动：http://127.0.0.1:8081')
})