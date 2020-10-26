//multipleResolves

// process.on('multipleResolves', (type, promise, reason) => {
//   console.error(type, promise, reason);
//   setImmediate(() => process.exit(1));
// });

// async function main() {
//   try {
//     return await new Promise((resolve, reject) => {
//       resolve('第一次调用');
//       resolve('吞没解决');
//       // reject(new Error('吞没解决'));
//     });
//   } catch {
//     throw new Error('失败');
//   }
// }

// main().then(console.log);

// process.on('exit', (code) => {
//   if (code === 1) {
//     console.log('完事了')
//   }
// })

// process.stdin.resume();
// process.on('SIGINT', () => {
//   console.log('接收到 SIGINT。 按 Control-D 退出。');
// });

// // 使用单独的函数处理多个信号。
// function handle(signal) {
//   console.log(`接收到 ${signal}`);
// }

// process.on('SIGINT', handle);
// process.on('SIGTERM', handle);

// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });