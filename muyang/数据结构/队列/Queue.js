"use strict";
exports.__esModule = true;
// 先进先出 一头进一头出
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.push = function (item) {
        this.items.push(item);
    };
    Queue.prototype.shift = function () {
        return this.items.shift();
    };
    Queue.prototype.top = function () {
        return this.items[0];
    };
    Queue.prototype.clear = function () {
        this.items = [];
    };
    Queue.prototype.size = function () {
        return this.items.length;
    };
    Queue.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    return Queue;
}());
exports["default"] = Queue;
