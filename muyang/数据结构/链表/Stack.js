"use strict";
exports.__esModule = true;
var LinkList_1 = require("./LinkList");
var Stack = /** @class */ (function () {
    function Stack() {
        this.link = new LinkList_1["default"]();
    }
    Stack.prototype.push = function (data) {
        this.link.append(data);
    };
    Stack.prototype.top = function () {
        return this.link.getNode(this.size()).data;
    };
    Stack.prototype.pop = function () {
        return this.link.remove(this.size()).data;
    };
    Stack.prototype.isEmpty = function () {
        return this.link.isEmpty();
    };
    Stack.prototype.size = function () {
        return this.link.length;
    };
    return Stack;
}());
// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log(stack.top());
// console.log(stack.size());
// console.log(stack.isEmpty());
// console.log(stack.pop());
// console.log(stack.top());
// console.log(stack.size());
// console.log(stack.pop());
exports["default"] = Stack;
