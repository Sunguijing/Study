const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

//创建一个server 
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('你好世界\n')
})

// 监听变化
server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})