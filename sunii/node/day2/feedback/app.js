// 把当前模块所有的依赖项都声明在文件模块最上面
// 为了让目录结构保持统一清晰，所有将html文件放到view中
// 为了方便的统一处理这些静态资源，所以约定把所有静态资源都放在public文件中
// 哪些资源能被用户访问，哪些资源不能被访问，可以通过代码灵活的控制
let http = require('http');
let fs = require('fs');
let template = require('art-template');
let url = require('url');


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

// 对于表单提交的请求路径，由于其中有用户动态填写的内容
// 所以不能通过完整的路径来判断

http
    .createServer(function(req, res){
        // 使用url.parse方法将路径解析为一个方便操作的对象，第二个参数为true表示查询字符串转成对象
        let parseObj = url.parse(req.url, true);
        // 单独获取不包含查询字符串的路径部分（该路径不包含问好后面内容）
        let pathname = parseObj.pathname;
        if(pathname === '/'){
            fs.readFile('./view/index.html', function(err, data){
                if(err){
                    return console.log('结果0：404')
                }
                var htmlStr = template.render(data.toString(), {
                    comments: comments
                })
                res.end(htmlStr);
            })
        } else if (pathname.indexOf('/public/') === 0) {
            // 请求静态资源的方法
            // 如果请求路径是以/public/开头的，则认为你要获取public里面的静态资源
            // 所以就直接把请求路径当作文件路径来直接进行读取
            fs.readFile('.' + pathname, function(err, data){
                if(err){
                    return console.log('结果1：404');
                }
                res.end(data);
            })
        } else if(pathname === '/post'){
            fs.readFile('./view/post.html', function(err, data){
                if(err){
                    return console.log('结果2：404');
                }
                res.end(data);
            })
        } else if (pathname === '/pinglun') {
            console.log('参数：', JSON.stringify(parseObj.query));
            // res.end(JSON.stringify(parseObj.query));

            let comment = parseObj.query;
            comment.dataTime = '2020-10-19 20:00:00';
            comments.push(comment);
            // 让用户重新请求首页
            // 服务器重定向
            // 如何通过服务器让客户端重定向
                // 1. 状态码设置为302临时重定向
                //  statusCOde
                // 2. 在响应头中通过location告诉客户端往哪重定向
                //  setHeader
                // 如果客户端发现收到服务器的响应的状态码是302，就会自动去响应头中找location
                // 所以就可以看到客户端自动跳转
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            
        
        } else {
            // 404页面
            fs.readFile('./view/404.html', function(err, data){
                if(err){
                    return console.log('结果3：404');
                }
                res.end(data);
            })
        }
    }).listen(8005, function(){
        console.log('127.0.0.1:8003');
    })