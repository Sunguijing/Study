// node 命令行传参数
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`)
// })

// const args = require('minimist')(process.argv.slice(2))
// console.log(args)

// console 专区
// console.log('我的%s已经%d岁', '猫', 2)
// const x = 1
// const y = 2
// const z = 3
// console.count(
//   'x 的值为 ' + x + ' 且已经检查了几次？'
// )
// console.count(
//   'x 的值为 ' + x + ' 且已经检查了几次？'
// )
// console.count(
//   'y 的值为 ' + y + ' 且已经检查了几次？'
// )

// const oranges = ['橙子', '橙子']
// const apples = ['苹果']
// oranges.forEach(fruit => {
//   console.count(fruit)
// })
// apples.forEach(fruit => {
//   console.count(fruit)
// })

// const doSomething = () => console.log('测试')
// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   //做点事，并测量所需的时间。
//   doSomething()
//   console.timeEnd('doSomething()')
// }
// measureDoingSomething()

// console.log('\x1b[33m%s\x1b[0m', '你好')
// const chalk = require('chalk');
// console.log(chalk.red('数据'))

// 进度条
// const ProgressBar = require('progress')

// const bar = new ProgressBar(':bar', { total: 10 })
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 100)

//命令行接受输入
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readline.question(`你叫什么名字?`, name => {
//   console.log(`你好 ${name}!`)
//   readline.close()
// })

// const inquirer = require('inquirer')

// var questions = [
// {
//   type: 'input',
//   name: 'age',
//   message: "你叫什么名字?"
// }]

// inquirer.prompt(questions).then(answers => {
//   console.log(`你好 ${answers['age']}!`)
// })

var cowsay = require("cowsay");

console.log(cowsay.say({
  text: "程序开始",
  cow: '', // Template for a cow, get inspiration from `./cows`
  eyes: 'oo', // Select the appearance of the cow's eyes, equivalent to cowsay -e
  tongue: 'L|', // The tongue is configurable similarly to the eyes through -T and tongue_string, equivalent to cowsay -T
  wrap: false, // If it is specified, the given message will not be word-wrapped. equivalent to cowsay -n
  wrapLength: 40, // Specifies roughly where the message should be wrapped. equivalent to cowsay -W
  mode: 'b', // One of 	"b", "d", "g", "p", "s", "t", "w", "y"
}));