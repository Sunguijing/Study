"use strict";
exports.__esModule = true;
var Tree_1 = require("./Tree");
var tree = new Tree_1["default"]();
tree.init_tree('A(B(D,E(G,)),C(,F))#');
var root_node = tree.root;
var node1 = tree.find_node('G');
var node2 = tree.find_node('F');
// 寻找最近公共祖先
var lowest_common_ancestor = function (root_node, node1, node2) {
  // 实现你的算法
  var node_1 = node1;
  var node_2 = node2;
  var parent_nodes1 = [];
  var parent_nodes2 = [];
  while (node_1 && node_1.data !== root_node.data) {
    node_1 = node_1.parentNode;
    parent_nodes1.push(node_1);
  }
  while (node_2 && node_2.data !== root_node.data) {
    node_2 = node_2.parentNode;
    parent_nodes2.push(node_2);
  }
  var max_l = parent_nodes1.length + parent_nodes2.length - 2;
  var parent = root_node;
  for (var i = 0; i < parent_nodes1.length; i++) {
    for (var j = 0; j < parent_nodes2.length; j++) {
      if (parent_nodes1[i].data === parent_nodes2[j].data) {
        if (max_l > i + j) {
          max_l = i + j;
          parent = parent_nodes1[i];
        }
      }
    }
  }
  return parent;
};
var ancestor = lowest_common_ancestor(root_node, node1, node2);
console.log(ancestor.data);

function lowest_common_ancestor1(root_node, node1, node2) {
  if (!root_node) {
    return null;
  }
  if (root_node.data === node1.data || root_node.data === node2.data) {
    console.log(root_node.data, '===1111===');
    return root_node;
  }
  console.log(root_node.data, '===root===')
  var left = lowest_common_ancestor1(root_node.leftChild, node1, node2);
  var right = lowest_common_ancestor1(root_node.rightChild, node1, node2);
  console.log(root_node.data, '===root2===')

  if (left && right) {
    console.log(left.data, right.data, '======++++=====-')
    console.log(root_node.data, '=====root==');
    return root_node;
  }
  if (left) {
    console.log(left.data, 'left====')
    return left;
  }
  console.log(right);
  return right;
}
var ancestor1 = lowest_common_ancestor1(root_node, node1, node2);
console.log(ancestor1.data);