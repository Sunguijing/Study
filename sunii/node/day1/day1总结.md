- Node.js是什么
    + javascript运行时
    + 既不是语言，也不是框架，是一个平台
- Node.js中的javascript
    + 没有BOM，DOM
    + EcmaScript基本的javascript语言部分
    + 在NOde中为Javascript提供了一些服务器级别的API，例如：
        * 文件操作的能力
        * Http服务的能力
    + 在Node中没有全局作用域的概念
    + 在Node中，只能通过requir方法来加载执行多个javascript脚本文件
    + require加载只能是执行其中的代码，文件与文件直接由于是模块作用域，所以不会有污染的问题
        * 模块完全是封闭的
        * 外部无法访问内部
        * 内部也无法访问外部
    + 模块作用域固然带来了一些好处，可以加载多个文件，完全避免变量污染问题
    + 但是在某些情况下，模块和模块是需要通信的
    + 在每个模块中，都提供了一个对象 ： ‘exports’
    + 该对象默认是一个空对象
    + 你要做的就是把需要被外部访问使用的成员手动挂载到'exports'接口对象中
    + 然后谁来'require'这个模块，谁就可以得到模块内部的'export'接口对象

- http
    + require
    + IP地址定位计算机
    + 端口号定位具体的应用程序
    + Content-Type
        * 不同资源对应的Content-Type是不一样的，具体参照： https://tool.oschina.net/commons
    + 通过网络发送文件
        * 发送的不是文件，本质上来说发送的文件的内容
        * 当浏览器收到服务器响应内容之后，就会根据你的Content-Type进行对应的解析处理
