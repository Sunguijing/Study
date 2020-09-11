"use strict";
exports.__esModule = true;
var Tree_1 = require("./Tree");
var Stack_1 = require("../\u6808/Stack");
var str = 'A(B(D,E(G,))C(,F))#';
var tree = new Tree_1["default"]();
tree.init_tree(str);
// 非递归实现 前 中 遍历  不用递归就用while + 栈
// 前
function pre_order(root) {
  var stack = new Stack_1["default"]();
  var node = root;
  while (node) {
    // console.log(node);
    if (node.rightChild) {
      stack.push(node.rightChild);
    }
    if (!node.leftChild) {
      node = stack.pop();
    }
    else {
      stack.push(node.leftChild);
      node = node.leftChild;
    }
  }
}
// pre_order(tree.root);
// 中
function in_order(root) {
  var stack = new Stack_1["default"]();
  var node = root;
  while (true) {
    while (node) {
      stack.push(node);
      node = node.leftChild;
    }
    const top_node = stack.pop();
    console.log(top_node.data, '======');
    node = top_node.rightChild;
    if (!node && stack.isEmpty()) {
      break;
    }
  }
}
// in_order(tree.root);


// 后

function post_order(root) {
  var stack = new Stack_1["default"]();
  var cur_node = root;

  while (true) {
    while (cur_node) {
      stack.push({ node: cur_node, state: 0 });
      cur_node = cur_node.leftChild;
    }
    const top = stack.pop();
    if (top.node.rightChild && top.state === 0) {
      cur_node = top.node.rightChild;
      top.state = 1;
      stack.push(top);
    } else {
      console.log(top.node.data, '========');
    }
    if (!cur_node && stack.isEmpty()) {
      break;
    }
  }
}
post_order(tree.root);