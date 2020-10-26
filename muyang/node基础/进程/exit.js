// 当 Node.js 进程因以下原因之一即将退出时， 则会触发 'exit'事件：
// 1.显式调用 process.exit() 方法；
// 2.Node.js 事件循环不再需要执行任何其他工作。
// 此时无法阻止退出事件循环， 并且一旦所有 'exit'事件的监听器都已完成运行时， Node.js 进程将终止。

//值得注意的是，通过process.exit()退出程序或者因为发生错误而退出程序是不会触发beforeExit事件的
//退出进程

process.on('exit', (code) => { // 在 exit 事件中，只能执行同步操作。在调用 'exit' 事件监听器之后，Node.js 进程将立即退出，从而导致在事件循环中仍排队的任何其他工作被放弃。
  console.log('进程 exit 事件的代码: ', code);
  setTimeout(() => {
    console.log('此处不会运行');
  }, 0);
});


// 一个 nodejs 进程， 可以通过 process.exit() 来指定退出代码， 直接退出。 不推荐直接使用 process.exit()， 这会导致事件循环中的任务直接不被处理， 以及可能导致数据的截断和丢失（ 例如 stdout 的写入）。

setTimeout(() => {
  console.log("我不会执行");
});

process.exit(1);


// 正确安全的处理是， 设置 process.exitCode， 并允许进程自然退出。

setTimeout(() => {
  console.log("我不会执行");
});
process.exitCode = 1;

// beforeExit 事件 
// 当 Node.js 清空其事件循环并且没有其他工作要安排时， 会触发 beforeExit 事件。 例如在退出前需要一些异步操作， 那么可以写在 beforeExit 事件中：

// let hasSend = false;
// process.on("beforeExit", () => {
//   if (hasSend) return; // 避免死循环
//   setTimeout(
//     `< span class = "hljs-function"
//     style = "line-height: 26px;" > < span class = "hljs-params"
//     style = "line-height: 26px;" > () < /span> =&gt;</span > {
//       <
//       span class = "hljs-built_in"
//       style = "color: #0086b3; line-height: 26px;" > console < /span>.log(<span class="hljs-string" style="color: #d14; line-height: 26px;">"mock send data to serve"</span > ); hasSend = < span class = "hljs-literal"
//     style = "color: #008080; line-height: 26px;" > true < /span>;
//   }, < span class = "hljs-number"
//   style = "color: #008080; line-height: 26px;" > 500 < /span>`
//   );

// });
// console.log(".......");
// 输出：
// .......
// mock send data to serve


// 注意： 在 beforeExit 事件中如果是异步任务， 那么又会被添加到任务队列。 此时， 任务队列完成所有任务后， 又回触发 beforeExit 事件。 因此， 不处理的话， 可能出现死循环的情况。 如果是显式调用 exit()， 那么不会触发此事件。