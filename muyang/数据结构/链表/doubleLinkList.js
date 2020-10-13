"use strict";
// 双向链表
exports.__esModule = true;
var DoubleNode = /** @class */ (function () {
    function DoubleNode(data) {
        this.next = null;
        this.pre = null;
        this.data = data;
    }
    return DoubleNode;
}());
var DoubleLinkList = /** @class */ (function () {
    function DoubleLinkList() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    DoubleLinkList.prototype.isRange = function (index) {
        return index >= 0 && index < this.length;
    };
    //添加元素
    DoubleLinkList.prototype.append = function (data) {
        var node = new DoubleNode(data);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            var tail = this.tail;
            tail.next = node;
            node.pre = tail;
        }
        this.tail = node;
        this.length += 1;
    };
    // 添加指定位置节点
    DoubleLinkList.prototype.insert = function (data, index) {
        if (!this.isRange(index)) {
            return false;
        }
        var node = new DoubleNode(data);
        var head = this.head;
        if (index === 0) {
            this.head = node;
            node.next = head;
            head.pre = node;
        }
        else {
            var curNode = head.next;
            // let nextNode = curNode.next;
            var i = 1;
            // 这个while 只是为了找到插入点的node
            while (i !== index) {
                curNode = curNode.next;
                i += 1;
            }
            node.pre = curNode.pre;
            curNode.pre = node;
            node.next = curNode;
        }
        this.length += 1;
        return node;
    };
    // 删除指定节点
    DoubleLinkList.prototype.remove = function (index) {
        if (!this.isRange(index)) {
            return null;
        }
        var head = this.head;
        var delNode;
        if (index === 0) {
            delNode = head;
            var nextNode = delNode.next;
            nextNode.pre = null;
            this.head = nextNode;
        }
        else if (this.length === index + 1) {
            delNode = this.tail;
            var preNode = delNode.pre;
            preNode.next = null;
            this.tail = preNode;
        }
        else {
            var curNode = head.next;
            var i = 1;
            while (i !== index) {
                curNode = curNode.next;
                i++;
            }
            var preNode = curNode.pre;
            var nextNode = curNode.next;
            preNode.next = nextNode;
            nextNode.pre = preNode;
            delNode = curNode;
        }
        this.length -= 1;
        return delNode;
    };
    //空
    DoubleLinkList.prototype.isEmpty = function () {
        return this.length === 0;
    };
    return DoubleLinkList;
}());
var doubleLinks = new DoubleLinkList();
doubleLinks.append(1);
doubleLinks.append(2);
doubleLinks.append(3);
doubleLinks.append(4);
console.log(doubleLinks.remove(3));
console.log(doubleLinks.tail);
// console.log(doubleLinks.tail);
// console.log(doubleLinks.insert(3, 2));
// console.log(doubleLinks.tail);
exports["default"] = DoubleLinkList;
