"use strict";
exports.__esModule = true;
var LinkList_1 = require("./LinkList");
var Stack_1 = require("./Stack");
function getData(num) {
    var link = new LinkList_1["default"]();
    for (var i = 0; i < num; i++) {
        link.append(i);
    }
    return link;
}
var linkData = getData(10);
// 迭代翻转
function turn(linkData) {
    if (linkData.isEmpty()) {
        return null;
    }
    var curNode = linkData.head;
    var preNode = null;
    var nextNode = null;
    // a => b =>c
    // c => b => a
    while (curNode) {
        nextNode = curNode.next;
        curNode.next = preNode;
        preNode = curNode;
        curNode = nextNode;
    }
    console.log(preNode);
}
// turn(linkData);
// 普通循环
function turn1(linkData) {
    var curNode, preNode;
    for (var i = linkData.length; i > 0; i--) {
        curNode = linkData.getNode(i);
        if (i === 1) {
            curNode.next = null;
        }
        else {
            preNode = linkData.getNode(i - 1);
            curNode.next = preNode;
        }
    }
    console.log(preNode);
}
// turn1(linkData);
// 栈
function turnStack(linkData) {
    var stack = new Stack_1["default"]();
    var curNode = linkData.head;
    while (curNode) {
        stack.push(curNode);
        curNode = curNode.next;
    }
    var item, topItem;
    while (!stack.isEmpty()) {
        item = stack.pop();
        if (stack.isEmpty()) {
            item.next = null;
            topItem = item;
        }
        else {
            topItem = stack.top();
            item.next = topItem;
        }
    }
    console.log(topItem);
}
// turnStack(linkData);
// 递归
function recursion(node) {
    if (!node) {
        return null;
    }
    if (!node.next) {
        // console.log(node);
        return node;
    }
    var nextNode = recursion(node.next);
    console.log(node.next);
    console.log(node);
    node.next.next = node;
    node.next = null;
    return nextNode;
}
recursion(linkData.head);
