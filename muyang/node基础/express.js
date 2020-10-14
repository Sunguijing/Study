// const express = require('express')

// const app = express()

// app.get('/', (req, res) => {
//   res.send('你好')
//   console.log(11)
//   process.kill(process.pid, 'SIGTERM')
// })

// const server = app.listen(3000, () => console.log('服务器已就绪'))

// console.log(process.env.NODE_ENV)
// process.on('SIGTERM', () => {
//   server.close(() => {
//     console.log('进程已终止')
//   })
// })
// const axios = require('axios')

// axios
//   .post('http://nodejs.cn/todos', {
//     todo: '做点事情'
//   })
//   .then(res => {
//     console.log(`状态码: ${res.statusCode}`)
//     console.log(res)
//   })
//   .catch(error => {
//     console.error(error)
//   })

// const https = require('https')

// const data = JSON.stringify({
//   todo: '做点事情'
// })

// const options = {
//   hostname: 'nodejs.cn',
//   port: 443,
//   path: '/todos',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length
//   }
// }

// const req = https.request(options, res => {
//   console.log(`状态码: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.write(data)
// req.end()

// const fs = require('fs')

// try {
//   const data = fs.readFileSync('/Users/xsf/Desktop/题目请接收.txt', 'utf8')
//   console.log(data)
// } catch (err) {
//   console.error(err)
// }

// const fs = require('fs')

// const content = '一些内容数据'

// fs.writeFile('/Users/xsf/Desktop/测试文件.txt', content, { flag: 'a+' }, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //文件写入成功。
// })
// const addcontent = '测试添加数据';

// fs.appendFile('/Users/xsf/Desktop/测试文件.txt', addcontent, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //完成！
// })

// try {
//   const data = fs.readFileSync('/Users/xsf/Desktop/测试文件.txt', 'utf8')
//   console.log(data)
// } catch (err) {
//   console.error(err)
// }

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream(__dirname + '/data.txt')
  stream.pipe(res)
})
Proxy
server.listen(3000)