"use strict";
exports.__esModule = true;
/**
 * 两个队列实现一个栈
*/
var Queue_1 = require("./Queue");
var QueueStack = /** @class */ (function () {
    function QueueStack() {
        this.queue1 = new Queue_1["default"]();
        this.queue2 = new Queue_1["default"]();
        this.data = null;
        this.save_data = null;
    }
    QueueStack.prototype.init_queue = function () {
        if (!this.queue2.isEmpty()) {
            this.data = this.queue2;
            this.save_data = this.queue1;
        }
        else {
            this.data = this.queue1;
            this.save_data = this.queue2;
        }
    };
    QueueStack.prototype.push = function (item) {
        this.init_queue();
        this.data.push(item);
    };
    QueueStack.prototype.pop = function () {
        this.init_queue();
        while (this.data.size() > 1) {
            this.save_data.push(this.data.shift());
        }
        return this.data.shift();
    };
    QueueStack.prototype.top = function () {
        this.init_queue();
        while (this.data.size() > 1) {
            this.save_data.push(this.data.shift());
        }
        this.save_data.push(this.data.top());
        return this.data.shift();
    };
    return QueueStack;
}());
var stack = new QueueStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.top());
stack.push(5);
console.log(stack.top());
