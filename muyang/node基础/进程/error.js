// uncaughtException事件
// err < Error > 未捕获的异常。
// origin < string > 表明异常是来自未处理的拒绝还是来自同步的错误。 可以是 'uncaughtException'
// 或 'unhandledRejection'。
// The latter is only used in conjunction with the--unhandled - rejections flag set to strict or
// throw and an unhandled rejection.
// 当未捕获的 JavaScript 异常一直冒泡回到事件循环时， 会触发 'uncaughtException'
// 事件。 默认情况下， Node.js 通过将堆栈跟踪打印到 stderr 并使用退出码 1 来处理此类异常， 从而覆盖任何先前设置的 process.exitCode。 为 'uncaughtException'
// 事件添加处理程序会覆盖此默认行为。 或者， 更改 'uncaughtException'
// 处理程序中的 process.exitCode， 这将导致进程退出并提供退出码。 否则， 在存在这样的处理程序的情况下， 进程将以 0 退出
// const fs = require('fs');

// process.on('uncaughtException', (err, origin) => {
//   fs.writeSync(
//     process.stderr.fd,
//     `捕获的异常: ${err}\n` +
//     `异常的来源: ${origin}`
//   );
// });

// setTimeout(() => {
//   console.log('这里仍然会运行');
// }, 1000);

// // 故意引起异常，但不要捕获它。
// nonexistentFunc();
// console.log('这里不会运行');
// 通过安装 'uncaughtExceptionMonitor'监听器， 可以监视 'uncaughtException'事件， 而不会覆盖默认行为以退出该进程。

//uncaughtExceptionMonitor ?????
// err < 错误 > 未捕获的异常。
// origin < string > 指示异常是源自未处理的拒绝还是源自同步错误。 可以是 'uncaughtException'或 'unhandledRejection'。
// 后者仅与--unhandled - rejections设置为strict或的 标志throw以及未处理的拒绝一起使用。在 'uncaughtExceptionMonitor'发出 'uncaughtException'
// 事件或process.setUncaughtExceptionCaptureCallback() 调用通过安装的钩子之前发出 事件。

// 发出事件后， 安装 'uncaughtExceptionMonitor'侦听器不会更改行为 'uncaughtException'。如果未 'uncaughtException'安装侦听器， 则该过程仍将崩溃。

// process.on('uncaughtExceptionMonitor', (err, origin) => {
//   console.log(111)
//   MyMonitoringTool.logSync(err, origin);
// });

// Intentionally cause an exception, but don't catch it.
// nonexistentFunc();
// Still crashes Node.js


// unhandledRejection
// reason < Error > | < any > 此对象包含了 promise 被拒绝的相关信息（ 通常是一个 Error 对象）。
// promise 被拒绝的 promise 对象。
// 如果在事件循环的一次轮询中， 一个 Promise 被拒绝， 并且此 Promise 没有绑定错误处理器， 'unhandledRejection 事件会被触发。 当使用 Promise 进行编程时，异常会以被拒绝的 promise 的形式封装。 拒绝可以被 promise.catch() 捕获并处理，并且在 Promise 链中传播。' unhandledRejection 事件在探测和跟踪 promise 被拒绝， 并且拒绝未被处理的场景中是很有用的。

// process.on('unhandledRejection', (reason, promise) => {
//   console.log('未处理的拒绝：', promise, '原因：', reason);
//   // 记录日志、抛出错误、或其他逻辑。
// });
// Promise.race([111]).then((res) => {
//   return reportToUser(JSON.pasre(res)); // 故意输错 (`pasre`)。
// });

// function SomeResource() {
//   // 将 loaded 的状态设置为一个拒绝的 promise。
//   this.loaded = Promise.reject(new Error('错误信息'));
// }
// const resource = new SomeResource();

// 在例子中， 可以像在其他 'unhandledRejection'事件的典型场景中一样， 跟踪开发者错误导致的拒绝。 为了解决这样的错误， resource.loaded 中可以加一个不做任何操作的.catch(() => {}) 处理器， 这样可以阻止 'unhandledRejection'事件的触发。



process.on('warning', (warning) => {
  console.warn(warning.name); // 打印警告名称
  console.warn(warning.message); // 打印警告信息
  console.warn(warning.stack); // 打印堆栈信息
});