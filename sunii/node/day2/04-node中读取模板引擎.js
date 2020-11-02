// art-template 模板引擎
// art-template 不仅可以在浏览器中使用，也可以在服务端中使用


// 在node中使用art-template模板引擎
// 1. npm install art-template
// 2. 在需要使用的文件模块中加载art-template, require('art-template);
// 3. 查文档，使用api

let template = require('art-template');
let fs = require('fs');
let http = require('http');
let server = http.createServer();
// template.render('模板字符串','替换对象');

server.on('request', function(req, res){
    fs.readFile('www/node.html', function(err, data){
        if(err){
            return console.log('文件找不到了')
        }
        let ret = template.render(data.toString(), {
            name: 'Jack',
            age: 18
        })
        console.log(ret);
        res.end(ret);
    })
})

server.listen(8002, function(){
    console.log('127.0.0.1:8002');
})




