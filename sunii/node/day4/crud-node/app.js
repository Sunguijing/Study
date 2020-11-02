// app.js
// 职责： 创建服务
// 模板引擎
// 挂载路由
// 监听端口启动服务
// 开放公共文件夹


let express = require('express');
let router = require('./router');
let bodyParse = require('body-parser');

let app = express();

app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));

// 配置模板引擎和border-parser一定要在路由挂载之前
app.engine('html', require('express-art-template'));

app.use(bodyParse.urlencoded({ extended: false}));
app.use(bodyParse.json());
// router(app);
// 把路由容器挂载到app服务中
app.use(router);


app.listen('8081', function(){
    console.log('127.0.0.1:8081');
})