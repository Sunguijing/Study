"use strict";
exports.__esModule = true;
var Tree_1 = require("./Tree");
// 求一棵树的镜像(左右节点互换)
var str = 'A(B(D,E(G,))C(,F))#';
var tree = new Tree_1["default"]();
tree.init_tree(str);
// 解一
// 先换自己的左右 再换递归子节点
function mirror(node) {
    if (!node) {
        return false;
    }
    var temp = node.leftChild;
    node.leftChild = node.rightChild;
    node.rightChild = temp;
    mirror(node.leftChild);
    mirror(node.rightChild);
}
mirror(tree.root);
console.log(tree.root);
// 解二
// 先递归子节点 再换
function mirror1(node) {
    if (!node) {
        return;
    }
    var left = mirror1(node.leftChild);
    var right = mirror1(node.rightChild);
    node.rightChild = left;
    node.leftChild = right;
    return node;
}
mirror1(tree.root);
console.log(tree.root);
