let express = require('express');
let app = express();
let bodyParse = require('body-parser');

app.use('/public/', express.static('./public/'));


let comments = [
    {
        name: '张视',
        message: '从前有座山，山里有个庙',
        dataTime: '2020-10-19'
    },
    {
        name: '张视',
        message: '从前有座山，山里有个庙',
        dataTime: '2020-10-19'
    },
    {
        name: '张视',
        message: '从前有座山，山里有个庙',
        dataTime: '2020-10-19'
    },
    {
        name: '张视',
        message: '从前有座山，山里有个庙',
        dataTime: '2020-10-19'
    },
    {
        name: '张视',
        message: '从前有座山，山里有个庙',
        dataTime: '2020-10-19'
    }
];
// 配置body.parse
// 只有加入这个配置，则在req请求对象上会多出来一个req请求对象上会多出来一个属性：body
// 这个时候就可以获取到post的数据了
app.use(bodyParse.urlencoded({ extended: false }));
// parse.application/json
app.use(bodyParse.json());

// 配置使用art-template模板引擎
// 第一个参数，标识，当渲染以.art结尾的文件的时候，使用art-template模板引擎
// express-art-template是专门用来在express中把art-template整合到expree中
// 虽然外面这里不需要记载art-template但是必须安装art-template，因为依赖关系
app.engine('html', require('express-art-template'));

// Express为Response相应提供了一个方法：render
// render方法默认是不可使用的，但是如果配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认会去项目中的views目录查找该模板文件
// 也就是说Express有一个约定，开发人员把所有的视图文件都放到了views目录中

// 如果像修改默认的views目录, 则可以
// app.set('views', render函数的默认路径);

app.get('/', function(req, res){
    res.render('index.html',{
        comments: comments
    })
})

app.get('/post', function(req, res){
    res.render('post.html');
})

// app.get('/pinglun', function(req, res){
//     let comment = req.query;
//     comment.dataTime = '2020-10-21 10:20:00';
//     comments.unshift(comment);
//     res.redirect('/');
// })

// 使用Post请求
app.post('/post', function(req, res){
    // 获取表单Post请求体数据
    // 处理
    // 发送响应
    console.log(req.body);
    let comment = req.body;
    comment.dataTime = '2020-10-21 10:20:00';
    comments.unshift(comment);
    res.redirect('/');
})

app.listen(8080, function(){
    console.log('127.0.0.1:8080');
})