"use strict";
exports.__esModule = true;
var LinkList_1 = require("./LinkList");
var Stack_1 = require("./Stack");
function getData(num, start) {
    var link = new LinkList_1["default"]();
    for (var i = start; i < num + start; i++) {
        link.append(i);
    }
    return link;
}
var linkNodes = getData(10, 1);
// 查找单链表中的倒数第k个节点 (k>0)
// 根据封装的LinkList类
function reverseFind1(links, index) {
    if (index > links.length || index < 1) {
        return null;
    }
    var re_index = links.length - index;
    return links.getNode(re_index);
}
// console.log(reverseFind1(linkNodes, 4));
// 栈
function reverseFind2(startNode, index) {
    var curNode = startNode;
    var stack = new Stack_1["default"](); // 存储链表每一个数据 也可以用数组存最后 arr[arr.length - index]
    while (curNode) {
        stack.push(curNode);
        curNode = curNode.next;
    }
    var i = 0;
    while (index > i) {
        stack.pop();
        i += 1;
    }
    return stack.pop();
}
// console.log(reverseFind2(linkNodes.head, 4));
// 查找单链表的中间节点
function find_middle1(links) {
    var re_index = Math.floor(links.length / 2);
    return links.getNode(re_index);
}
console.log(find_middle1(linkNodes));
function find_middle2(startNode) {
    var curNode = startNode;
    var stack = new Stack_1["default"](); // 存储链表每一个数据 也可以用数组存最后 arr[arr.length/2]
    var length = 0;
    while (curNode) {
        length += 1;
        stack.push(curNode);
        curNode = curNode.next;
    }
    var i = 0;
    var index = Math.floor(length / 2);
    while (index > i) {
        stack.pop();
        i += 1;
    }
    return stack.pop();
}
console.log(find_middle2(linkNodes.head));
