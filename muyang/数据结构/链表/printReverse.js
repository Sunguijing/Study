"use strict";
exports.__esModule = true;
var LinkList_1 = require("./LinkList");
function getData(num) {
    var link = new LinkList_1["default"]();
    for (var i = 0; i < num; i++) {
        link.append(i);
    }
    return link;
}
var linkNodes = getData(10);
function reverse_print1(linkNodes) { }
reverse_print1(linkNodes);
function reverse_print2(node) {
    if (node) {
        reverse_print2(node.next);
        console.log(node);
    }
    else {
        return;
    }
}
reverse_print2(linkNodes.head);
