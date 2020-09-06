"use strict";
exports.__esModule = true;
// 栈特点 :  先进后出 数组存储 压栈push  取栈顶pop  查看栈顶item.length -1
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    //压
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    //查看
    Stack.prototype.top = function () {
        return this.items[this.items.length - 1];
    };
    // 取
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    //清空
    Stack.prototype.clear = function () {
        this.items = [];
    };
    // 个数
    Stack.prototype.size = function () {
        return this.items.length;
    };
    // 空
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.findAll = function () {
        return this.items;
    };
    return Stack;
}());
exports["default"] = Stack;
