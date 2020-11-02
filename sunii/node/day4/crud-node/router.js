/*
* 职责
*  处理路由
*  根据不同的请求方法路径设置具体处理函数
*/ 
let fs = require('fs');

let student = require('./student');
// 这样也不好，不是最佳方法
// module.exports = function(app){
//     app.get('/student', function(req, res){
//         res.render();
//     })
    
//     app.get('/', function(req, res){
    
//         // 读取文件
//         fs.readFile('./db.json', 'utf8', function(err, data){
//             if(err){
//                 return console.log('读取错误');
//             }
//             console.log(data);
//             // 读取的是字符串，要转成数组
//             res.render('index.html', {
//                 fruits: ['苹果', '香蕉', '橘子'],
//                 students: JSON.parse(data).student
//             });
//         })
//     })
// }

// Express提供了一种更好的方法
// 专门用来包装路由
let express = require('express');
// 创建一个路由容器
let router = express.Router();
// 把路由都挂载到router路由容器中
router.get('/', function(req, res){
    // 读取文件
    student.findAll(function(err, student){
        if(err){
            return res.status(500).send('Server error');
        }
        // 读取的是字符串，要转成数组
        res.render('index.html', {
            fruits: ['苹果', '香蕉', '橘子'],
            students: student
        });
    })
})

router.get('/students', function(req, res){
    res.render('kkjs');
})
router.get('/students/new', function(req, res){
    res.render('new.html');
})
router.post('/students/new', function(req, res){
    console.log(req.body);
    // 获取到输入的内容
    let studentItem = req.body;
    // 往文件json中添加数据
        // 先读取中，转成对象，再往对象中添加数据，再将对象转为字符串，最后写入文件
    student.saveAll(studentItem, function(err){
        if(err){
            return res.status(500).send('Server error');
        }
        res.redirect('/');

    })
})
router.get('/students/edit', function(req, res){
    student.findById(req.query.id, function(err, student){
        if(err){
            return res.status(500).send("Server error");
        }
        res.render('edit.html', {
            student: student
        });
    })
})
router.post('/students/edit', function(req, res){
    // 1. 获取表单数据
    // 2. 更新数据
    // 3. 发送响应
    student.updateAll(req.body, function(err){
        if(err){
            return res.status(500).send('Server error');
        }
        res.redirect('/');
    })
})
router.get('/students/delete', function(req, res){
    student.deleteAll(req.query.id, function(err){
        if(err){
            return res.status(500).send('Server error');
        }
        res.redirect('/');
    })
})
// 把router导出
module.exports = router;