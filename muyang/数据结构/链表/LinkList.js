"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkList = /** @class */ (function () {
    function LinkList() {
        this.head = null; // 头
        this.tail = null; //尾
        this.length = 0;
    }
    // 添加新元素
    LinkList.prototype.append = function (data) {
        var node = new Node(data);
        if (this.isEmpty()) {
            this.head = node;
        }
        else {
            this.tail.next = node;
        }
        this.tail = node;
        this.length += 1;
        return node;
    };
    //插入元素
    LinkList.prototype.insert = function (index, data) {
        if (index >= this.length) {
            return this.append(data);
        }
        var cNode = this.head;
        var node = new Node(data);
        if (index === 1) {
            node.next = cNode;
            this.head = node;
        }
        else {
            var i = 1;
            while (cNode.next) {
                i += 1;
                if (i === index) {
                    var nextNode = cNode.next;
                    cNode.next = node;
                    node.next = nextNode;
                    break;
                }
                cNode = cNode.next;
            }
        }
        this.length += 1;
        return node;
    };
    //判空
    LinkList.prototype.isEmpty = function () {
        return this.length === 0;
    };
    //范围
    LinkList.prototype.judgeRange = function (index) {
        return this.length >= index && index >= 0;
    };
    // 删除指定节点
    LinkList.prototype.remove = function (index) {
        if (!this.judgeRange(index)) {
            return null;
        }
        var cNode = this.head;
        var delNode;
        if (index === 1) {
            this.head = cNode.next;
            delNode = cNode;
        }
        else {
            var i = 1;
            while (i !== index - 1) {
                i += 1;
                cNode = cNode.next;
            }
            delNode = cNode.next;
            cNode.next = delNode.next;
            if (!delNode.next) {
                this.tail = cNode;
            }
        }
        this.length -= 1;
        return delNode;
    };
    // 获取指定node节点
    LinkList.prototype.getNode = function (index) {
        if (!this.judgeRange(index)) {
            return null;
        }
        if (index === 1) {
            return this.head;
        }
        if (index === this.length) {
            return this.tail;
        }
        var i = 1;
        var curNode = this.head;
        while (index !== i) {
            i += 1;
            curNode = curNode.next;
        }
        return curNode;
    };
    //返回指定元素索引
    LinkList.prototype.indexOf = function (data) {
        var i = 0;
        var curI = -1;
        var curNode = this.head;
        if (this.length === 1 && curNode.data === data) {
            curI = i;
        }
        else {
            while (curNode) {
                if (curNode.data === data) {
                    curI = i;
                    break;
                }
                i += 1;
                curNode = curNode.next;
            }
        }
        return curI;
    };
    //整个链表
    LinkList.prototype.print = function () {
        var curNode = this.head;
        while (curNode) {
            console.log(curNode);
            curNode = curNode.next;
        }
    };
    return LinkList;
}());
// const linkList = new LinkList();
// linkList.append(1);
// console.log(linkList.indexOf(1));
// linkList.append(3);
// console.log(linkList.indexOf(3));
// linkList.append(4);
// linkList.insert(2, 2);
// console.log(linkList.indexOf(2));
// console.log(linkList.indexOf(3));
// linkList.insert(1, 0);
// console.log(linkList.head);
// console.log(linkList.length);
// console.log(linkList.remove(3));
// console.log(linkList.tail);
// console.log(linkList.head);
// console.log(linkList.head.next);
// console.log(linkList.head.next.next);
// console.log(linkList.getNode(1));
// console.log(linkList.getNode(2));
// console.log(linkList.getNode(3));
// console.log(linkList.getNode(4));
exports["default"] = LinkList;
