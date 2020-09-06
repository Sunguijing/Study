"use strict";
exports.__esModule = true;
var Stack_1 = require("../\u6808/Stack");
var StackQueue = /** @class */ (function () {
  function StackQueue() {
    this.stack1 = new Stack_1["default"]();
    this.stack2 = new Stack_1["default"]();
  }
  StackQueue.prototype.push = function (item) {
    if (!this.stack2.isEmpty()) {
      this.stack2.push(item);
    }
    else {
      this.stack1.push(item);
    }
  };
  StackQueue.prototype.pop = function () {
    if (this.stack1.isEmpty()) {
      while (this.stack2.size() > 1) {
        this.stack1.push(this.stack2.pop());
      }
      return this.stack2.pop();
    }
    while (this.stack1.size() > 1) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack1.pop();
  };
  StackQueue.prototype.top = function () {};
  return StackQueue;
}());
var queue = new StackQueue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.pop());