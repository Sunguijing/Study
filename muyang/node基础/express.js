const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('你好')
  console.log(11)
  process.kill(process.pid, 'SIGTERM')
})

const server = app.listen(3000, () => console.log('服务器已就绪'))

console.log(process.env.NODE_ENV)
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('进程已终止')
  })
})