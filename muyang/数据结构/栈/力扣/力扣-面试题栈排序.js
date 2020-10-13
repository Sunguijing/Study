// var SortedStack = function () {
//   this.items = [];
//   this.minItems = [];
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// SortedStack.prototype.push = function (item) {
//   if (this.isEmpty()) {
//     this.minItems.push(item);
//   } else {
//     while (!this.isEmpty()) { // 1 > 2
//       var minVal = this.peek(); //  6
//       if (minVal > item) {
//         this.items.push(item);
//         break;
//       } else {
//         this.items.push(minVal);
//         this.pop()
//       }
//     }
//     if (this.minItems.length === 0) {
//       this.minItems.push(item);
//     }
//     while (this.items.length != 0) {
//       this.minItems.push(this.items.pop());
//     }
//     console.log(this.minItems);
//   }
// };

// /**
//  * @return {void}
//  */
// SortedStack.prototype.pop = function () {
//   this.minItems.pop();
// };

// /**
//  * @return {number}
//  */
// SortedStack.prototype.peek = function () {
//   if (this.isEmpty()) {
//     return -1;
//   }
//   return this.minItems[this.minItems.length - 1];
// };

// /**
//  * @return {boolean}
//  */
// SortedStack.prototype.isEmpty = function () {
//   return this.minItems.length === 0;
// };
// push、 pop、 peek 和 isEmpty。 当栈为空时， peek 返回 - 1。
//  输入：
//    ["SortedStack", "push", "push", "peek", "pop", "peek"]
//    [
//      [],
//      [1],
//      [2],
//      [],
//      [],
//      []
//    ]
//  输出：
//    [null, null, null, 1, null, 2]
class SortedStack {
  constructor() {
    this.stack = [];
    // this.save_stack = [];
  }
  push(item) {
    if (this.isEmpty()) {
      this.stack.push(item);
      return null;
    }
    let cur_node = this.peek();
    if (cur_node >= item) {
      this.stack.push(item);
      return null;
    }
    let save_stack = [];
    while (!this.isEmpty()) {
      cur_node = this.peek()
      if (cur_node > item) {
        save_stack.push(item);
        break;
      }
      save_stack.push(cur_node);
      this.pop();
    }
    if (this.isEmpty()) {
      this.stack.push(item);
    }
    cur_node = save_stack.pop();
    while (cur_node) {
      this.stack.push(cur_node);
      cur_node = save_stack.pop();
    }
    // console.log(this.stack);
  }
  peek() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.stack[this.stack.length - 1];
  }
  pop() {
    this.stack.pop();
  }
  isEmpty() {
    return this.stack.length === 0;
  }
}
var obj = new SortedStack()
obj.push(1)
obj.push(6)
obj.push(5)
console.log(obj.peek())