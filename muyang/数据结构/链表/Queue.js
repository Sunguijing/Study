"use strict";
exports.__esModule = true;
var LinkList_1 = require("./LinkList");
var Queue = /** @class */ (function () {
    function Queue() {
        this.link = new LinkList_1["default"]();
    }
    Queue.prototype.push = function (data) {
        this.link.append(data);
    };
    Queue.prototype.top = function () {
        return this.link.getNode(1).data;
    };
    Queue.prototype.pop = function () {
        return this.link.remove(1).data;
    };
    Queue.prototype.size = function () {
        return this.link.length;
    };
    Queue.prototype.isEmpty = function () {
        return this.link.isEmpty();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.top());
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.pop());
console.log(queue.top());
console.log(queue.size());
console.log(queue.pop());
