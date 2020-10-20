// 给定 S 和 T 两个字符串， 当它们分别被输入到空白的文本编辑器后， 判断二者是否相等， 并返回结果。# 代表退格字符。

// 注意： 如果对空文本输入退格字符， 文本继续为空。

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// var backspaceCompare = function (S, T) {
//   const arr1 = S.split('');
//   const arr2 = T.split('');
//   const stack1 = [],
//     stack2 = [];
//   while (arr1.length || arr2.length) {
//     const top1 = arr1.shift();
//     const top2 = arr2.shift();
//     if (top1 === '#') {
//       stack1.length && stack1.pop();
//     } else {
//       stack1.push(top1)
//     }
//     if (top2 === '#') {
//       stack2.length && stack2.pop();
//     } else {
//       stack2.push(top2)
//     }
//   }
//   return stack1.join('') === stack2.join('')
// };
var backspaceCompare = function (S, T) {
  function filStr(str) {
    const arr = str.split('');
    const stack = [];
    while (arr.length) {
      const top = arr.shift();
      if (top === '#') {
        stack.length && stack.pop();
      } else {
        stack.push(top)
      }
    }
    return stack.join('')
  }
  return filStr(S) === filStr(T)
};

console.log(backspaceCompare("ab#c", "ad#c"));