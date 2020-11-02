let express = require('express');

// 创建服务器，相当于以前的http.createServer
let app = express();

// 公开指定目录，之前的是判断Url然后拼接url来公开, 公开后，该文件可被直接访问
// app.use('/public/', express.static('./public/'));

// 这种就是等于用/a/ 来 替换/public/
// app.use('/a/', express.static('./public/'));

// 当省略第一个参数的时候，则可以通过省略/public的方式来访问
app.use(express.static('./public/'));
// 之前的是或者了req.url，然后用if逐一判断，这里封装好了
app.get('/', function(req, res){
    res.send('hello world!');
})

app.listen(8000, function(){
    console.log('127.0.0.1:8000');
})