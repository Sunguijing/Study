// 数据操作文件模块
// 操作文件中数据，只处理数据，不关心业务
let fs = require('fs');
const { callbackify } = require('util');
let dbPath = './db.json'
// 获取所有学生列表
exports.findAll = function(callback){
    fs.readFile(dbPath, 'utf-8', function(err, data){
        if(err){
            return callback(err);
        }
        return callback(null, JSON.parse(data).students);
    })
}

// 获取相应的id学生
exports.findById = function(id, callback){
    fs.readFile(dbPath, 'utf-8', function(err, data){
        if(err){
            return callback(err);
        }
        let students = JSON.parse(data).students;
        // 修改谁，就找到谁
        let stu = students.find(item => Number(item.id) === Number(id));
        return callback(null, stu);
    })
},

// 添加保存学生
exports.saveAll = function(student, callback){
    fs.readFile(dbPath, 'utf-8', function(err, data){
        if(err){
            return callback(err);
        }
        let students = JSON.parse(data).students;
        // 处理id唯一
        student.id = students[students.length - 1].id + 1;
        students.push(student);
        let fileData = JSON.stringify({
            students: students
        })
        console.log(fileData);
        fs.writeFile(dbPath, fileData, function(err, data){
            if(err){
                return callback(err);
            }
            callback(null);
        })
    })
},
// 更新学生
exports.updateAll = function(student, callback){
    fs.readFile(dbPath, 'utf-8', function(err, data){
        if(err){
            return callback(err);
        }
        let students = JSON.parse(data).students;
        // 修改谁，就找到谁
        let stu = students.find(item => Number(item.id) === Number(student.id));
        for(let key in student){
            stu[key] = student[key];
        };
        let fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function(err, data){
            if(err){
                return callback(err);
            }
            return callback(null);
        })
    })
}
// 删除学生
exports.deleteAll = function(id, callback){
    fs.readFile(dbPath, function(err, data){
        if(err){
            return callback(err);
        }
        console.log(id);
        let students = JSON.parse(data).students;
        let index = students.findIndex( item => {
            return Number(item.id) === Number(id);
        })
        students.splice(index, 1);
        let fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function(err, data){
            if(err){
                return callback(err);
            }
            return callback(null);
        })
    })
}