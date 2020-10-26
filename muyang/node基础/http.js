const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'
const serve = http.createServer((req, res) => {
  const { url } = req;
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  if (url === '/home') {
    res.end(`<span style="color:red">首页</span>`)
  }
  // console.log(req.url)
  res.end('再见世界\n')
})

serve.listen(port, hostname, () => {
  console.log('搞起来%s', port)
})